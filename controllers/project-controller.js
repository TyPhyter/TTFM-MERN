const express = require("express");
const router = express.Router();
const db = require("../models");
const mongoose = require("mongoose");



//add Project
router.post('/projects', (req, res) => {
    let project = {
        title: req.body.title,
        body: req.body.body,
        repoUrl: req.body.repoUrl,
        hostedUrl: req.body.hostedUrl,
        UserId: req.body.UserId,
        authorAvatarUrl: req.body.authorAvatarUrl
    }


    db.Project.create(project)
        .then((project) => {
            res.send(project);
        });
    // res.render('index', {});
});


//==================================

//get Projects, all or by project id
router.get('/projects/:id?', (req, res) => {
    if (req.params.id) {
        let _id = req.params.id;
        const o_id = mongoose.Types.ObjectId(_id);

        db.Project.find({ _id: o_id })
            .then((project) => {
                console.log(project);
                console.log('found');
                res.send(project);
               
            });
    } else {
        //'order' needs to be changed
        db.Project.find({})
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

    let id = req.params.id;
    db.Project.findAll({ userId: o_id })
        
        .sort(1)
        .then((projects) => {
            res.send(projects);
        });

});

//======================================

//get page for posting Projects by user id
router.get('/projects/post/:id', (req, res) => {
    let userid = req.params.id;
    res.render('projectMaker', {
        userid
    });

});

//=============
module.exports = router;