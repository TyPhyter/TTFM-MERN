const express = require('express');
const router = express.Router();
var db = require("../models");
var bcrypt = require('bcrypt');



//find user
router.get('/users/:id?', (req, res) => {
    if (req.params.id) {
        var userID = req.params.id;
        //VALID
        db.User.findById(userID)
            .then((user) => {
                res.send(user);
            })
            .catch((err) => {
                console.log('db.User.findById', err);
            });
    } else {

        //VALID
        db.User.find({})
            .then((users) => {
                //maybe require admin permissions for this, or just disable it
                //definitely don't send password hashes in production
                res.send(users);
            })
            .catch((err) => {
                console.log('db.User.findAll', err);
            });
    }
    
});

//create user
router.post('/users', (req, res) => {
    let email = req.body.email;
    //bcrypt this before saving it
    let plainPass = req.body.pass;
    let displayName = req.body.displayName;
    console.log('POST /users', email, plainPass);
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
                            //CHECK VALIDITY
                            // Store hash in your password DB.
                            db.User.create({ email: email, passwordHash: hash, displayName: displayName })
                                .then((user) => {
                                    //mimicking findOrCreate, return away with a 'created' flag in index [1]
                                    //TO DO: render dashboard
                                    let date = new Date();
                                    //initialize the logins 'array' with the account created date
                                    //THIS WILL NEED TO BE CHANGED
                                    user.logins = [date.toISOString().slice(0, 19).replace('T', ' ')];
                                    user.save().then(() => { });
                                    res.redirect(`/dashboard/${user.id}`);
                                });
                        });
                }


            })
            .catch((err) => {
                console.log(err);
            });

        // res.render('index', {});
    }
});

//create (and/or login) user via github login
router.post('/users/github', (req, res) => {

    let githubID = req.body.githubID;
    let githubName = req.body.githubName;
    let githubAlias = req.body.githubAlias;
    let avatarUrl = req.body.avatarUrl;
    //VALID
    db.User.findOne({ githubID: githubID })
        .then((user) => {
            //if we match a record, then the id is already registered
            if (user) {
                res.redirect(`/dashboard/${user.id}`);
            } else {
                //CHECK VALIDITY
                //no user, so create account
                // Store hash in your password DB.
                db.User.create({ githubID, githubName, githubAlias, avatarUrl })
                    .then((user) => {
                        //mimicking findOrCreate, return away with a 'created' flag in index [1]
                        let date = new Date();
                        //THIS WILL NEED TO BE CHANGED
                        //initialize the logins 'array' with the account created date
                        user.logins = [date.toISOString().slice(0, 19).replace('T', ' ')];
                        user.save().then(() => { });
                        res.redirect(`/dashboard/${user.id}`);
                    });
            }


        })
        .catch((err) => {
            console.log(err);
        });

});

router.post('/users/login', (req, res) => {
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
                            //TO DO: use a projection instead, eliminate the password field
                            //TO DO: redirect to dashboard
                            //TO DO: add login record to User "array" field for gamification
                            if (authenticated) {
                                let date = new Date();
                                //get logins array, push new date, set array, save
                                //THIS WILL NEED TO BE CHANGED
                                let loginsArray = user.get('logins');
                                loginsArray.push(date.toISOString().slice(0, 19).replace('T', ' '));
                                user.logins = loginsArray;
                                user.save().then(() => { });
                                res.user = user;
                                res.redirect(`/dashboard/${user.id}`);
                                // res.json(user);
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

router.get('/dashboard/:id', function (req, res) {
    let userID = req.params.id;
    if (userID) {
        //VALID
        db.User.findOne({ id: userID })
            .then((user) => {
                console.log(user);
                res.render('dashboard', user.dataValues);
            })

    } else {
        res.redirect('/');
    }

});

router.get('/dashboard/github/:id', function (req, res) {
    let githubID = req.params.id;
    if (userID) {
        //VALID
        db.User.findOne({ githubID: githubID })
            .then((user) => {
                console.log(user);
                res.render('dashboard', user.dataValues);
            })

    } else {
        res.redirect('/');
    }

});

//TO DO: 'delete' user

module.exports = router;