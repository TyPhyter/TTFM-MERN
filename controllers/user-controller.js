const express = require('express');
const router = express.Router();
const db = require("../models");
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

//find user
router.get('/users/:id?', (req, res) => {

    if (req.params.id) {

        const _id = req.params.id;
        const o_id = mongoose.Types.ObjectId(_id);
        //VALID
        db.User.findById(o_id)
            .then((user) => {
                res.send(user);
            })
            .catch((err) => {
                console.log('db.User.findById', err);
                res.status('400').send(err);
            });

    } else {

        //VALID
        db.User.find({})
            .then((users) => {
                //TO DO
                //maybe require admin permissions for this, or just disable it
                //definitely don't send password hashes in production
                res.send(users);
            })
            .catch((err) => {
                console.log('db.User.findAll', err);
                res.status('400').send(err);
            });
    }
});

//create user
router.post('/users', (req, res, next) => {
    let email = req.body.email;
    //bcrypt this before saving it
    let plainPass = req.body.pass;
    let displayName = req.body.displayName;
    console.log('POST /users', email);
    if (email && plainPass) {
        //VALID
        db.User.findOne({ email: email })
            .then((user) => {
                //if we match a record, then the email is already registered
                if (user) {
                    res.status(422).send('That email is already registered');
                } else {
                    //no user, so create account
                    bcrypt.hash(plainPass, 10)
                        .then((hash) => {
                            db.User.create({ email: email, passwordHash: hash, displayName: displayName, logins: [new Date()] })
                                .then((updatedUser) => {

                                    //TO DO: use a projection instead, eliminate the password field
                                    res.locals.user = updatedUser;
                                    res.locals.newToken = jwt.sign({
                                        //1hr from now
                                        exp: Math.floor(Date.now() / 1000) + (60 * 60),
                                        user: res.locals.user
                                    }, 'mysecret');
                                    console.log(updatedUser);
                                    next();
                                });
                        });
                }


            })
            .catch((err) => {
                console.log(err);
            });

    }
});

//create (and/or login) user via github login
router.post('/users/github', (req, res, next) => {

    let githubID = req.body.githubID;
    let githubName = req.body.githubName;
    let githubAlias = req.body.githubAlias;
    let avatarUrl = req.body.avatarUrl;

    //VALID
    db.User.findOne({ githubID: githubID })
        .then((user) => {
            console.log(user);

            //if we match a record, then the id is already registered
            //log in, gen a new token, next()
            if (user !== null) {
                console.log('user found, logging in');
                let date = new Date();
                user.logins.push(date);
                user.save()
                    .then((updatedUser) => {
                        //TO DO: use a projection instead, eliminate the password field
                        db.User.findById(mongoose.Types.ObjectId(updatedUser._id))
                            .populate({
                                path: 'projects',
                                populate: { path: 'author' }
                            })
                            .populate({
                                path: 'tests',
                                populate: { path: 'author' }
                            })
                            .then((user) => {
                                res.locals.user = user;

                                res.locals.newToken = jwt.sign({
                                    //1hr from now
                                    exp: Math.floor(Date.now() / 1000) + (60 * 60),
                                    user: res.locals.user
                                }, 'mysecret');
                                console.log(updatedUser);
                                next();
                            });

                    })
                    .catch((err) => {
                        res.status('400').send(err);
                    });
            } else {
                // no user, so create account
                // Store hash in your password DB.
                // gen a new token, next()
                db.User.create({ githubID, githubName, githubAlias, avatarUrl, logins: [new Date()] })
                    .then((user) => {
                        console.log('created user', user);
                        //TO DO: use a projection instead, eliminate the password field
                        db.User.findById(mongoose.Types.ObjectId(user._id))
                            .populate({
                                path: 'projects',
                                populate: { path: 'author' }
                            })
                            .populate({
                                path: 'tests',
                                populate: { path: 'author' }
                            })
                            .then((user) => {
                                res.locals.user = user;
                                res.locals.newToken = jwt.sign({
                                    //1hr from now
                                    exp: Math.floor(Date.now() / 1000) + (60 * 60),
                                    user: res.locals.user
                                }, 'mysecret');
                                console.log(updatedUser);
                                next();
                            });

                    }).catch((err) => {
                        res.status('400').send(err);
                    });
            }


        })
        .catch((err) => {
            console.log(err);
        });

});

router.post('/users/login', (req, res, next) => {
    console.log('mark');
    let email = req.body.email;
    let plainPass = req.body.pass;

    if (email && plainPass) {
        //find user with provided email
        //VALID
        db.User.findOne({ email: email })
            .then((user) => {
                if (user) {
                    //if we match an email, compare provided pass with hash via bcrypt
                    bcrypt.compare(plainPass, user.passwordHash)
                        .then((authenticated) => {
                            //if we match, send back the user object

                            if (authenticated) {
                                //record login to array on user doc
                                let date = new Date();
                                user.logins.push(date);
                                user.save()
                                    .then((updatedUser) => {
                                        //TO DO: use a projection instead, eliminate the password field
                                        res.locals.user = updatedUser;
                                        res.locals.newToken = jwt.sign({
                                            //1hr from now
                                            exp: Math.floor(Date.now() / 1000) + (60 * 60),
                                            user: res.locals.user
                                        }, 'mysecret');
                                        console.log('updatedUser', updatedUser);
                                        next();
                                    })
                                    .catch((err) => {
                                        res.status('400').send(err);
                                    });

                            } else {
                                res.status(403).send('Incorrect password');
                            }

                        })
                        .catch((err) => {
                            console.log('bcrypt.compare', err);
                        });
                } else {
                    res.status(404).send('Email not found');
                }

            })
            .catch((err) => {
                console.log('db.User.findOne', err);
            });
    } else {
        res.status(403).send('Username and password required');
    }


});

//TO DO: 'delete' user

module.exports = router;