const express = require("express");
const router = express.Router();
const db = require("../models");
const app = require("mongoose");


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
        let id = req.params.id;
        db.Project.findOne({ Userid: id })
            .populate('author')
            .then((project) => {
                console.log(project.dataValues);
                res.render('projectDetail', project.dataValues);
            });
    } else {
        db.Project.findAll({ order: [['updatedAt', 'DESC']] })
            .then((projects) => {
                console.log(projects);
                res.render('allProjects', projects);
            });
    }
});

//======================================

//get Projects by user id
router.get('/projects/user/:id', (req, res) => {

    let id = req.params.id;
    db.Project.findAll({ where: { UserId: id }, order: [['updatedAt', 'DESC']] })
        .then((projects) => {
            res.send(projects);
        });

});

//======================================

//get page for posting Projects by user id
router.get('/projects/post/:id', (req, res) => {
    let userid = req.params.id;
    res.render('projectMaker', { userid });

});

//=============
module.exports = router;