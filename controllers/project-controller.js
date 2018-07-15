const express = require("express");
const router = express.Router();
const db = require("../models");
const mongoose = require("mongoose");



//add Project
router.post('/projects', (req, res) => {

    let project = {
        title: req.body.title,
        body: req.body.body,
        repoUrl: req.body.repoUrl,//optional
        hostedUrl: req.body.hostedUrl,//optional
        author: req.body.author, //ObjectId
    }
    const _id = req.body.author;
    const o_id = mongoose.Types.ObjectId(_id);


    db.Project.create(project)
        .then((project) => {
            db.User.findById(o_id)
                .then((user) => {
                    user.projects.push(project._id);
                    user.save();
                });
            res.send(project);
        });
});


//==================================

//get Projects, all or by project id
router.get('/projects/:id?', (req, res) => {
    if (req.params.id) {
        let _id = req.params.id;
        const o_id = mongoose.Types.ObjectId(_id);

        db.Project.find({ _id: o_id })
            .populate('author')
            .populate('tests')
            .then((project) => {
                console.log(project);
                console.log('found');
                res.send(project);
               
            });
    } else {
       
        db.Project.find({})
            .populate('author')
            .populate('tests')
            // .sort(1)
            .then((projects) => {
                console.log("found all");
                res.send(projects);
            });
    }
});

//======================================

//get Projects by user id
router.get('/projects/user/:id', (req, res) => {
    //this is the user ID
    let _id = req.params.id;
    const o_id = mongoose.Types.ObjectId(_id);

    db.User.findById(o_id)
        .populate('projects')
        .then((user) => {
            res.send(user.projects);
        });
});


module.exports = router;