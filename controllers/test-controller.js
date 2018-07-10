const express = require('express');
const router = express.Router();
const db = require('../models')
const app = require('mongoose');




//add Test
router.post('/tests', (req, res) => {

    console.log(req.body);
    let test = {
        title: req.body.title,
        body: req.body.body,
        score: req.body.score,
        authorDisplayName: req.body.authorDisplayName,
        authorGithubName: req.body.authorGithubName,
        authorAvatarUrl: req.body.authorAvatarUrl,
        ProjectId: req.body.ProjectId,
        UserId: req.body.UserId
    }


    db.Test.create(test)
        .then((test) => {
            //res.redirect(`/projects/${req.body.ProjectId}`);
        });
    // res.render('index', {});
});

//get Tests by project id
router.get('/tests/project/:id', (req, res) => {

    let id = req.params.id;
    db.Test.findAll({ where: { ProjectId: id } })
        .then((tests) => {
            res.send(tests);
        });

});

//get Tests by user id
router.get('/tests/user/:id', (req, res) => {

    let id = req.params.id;
    db.Test.find({ where: { UserId: id } })
        .then((tests) => {
            res.send(tests);
        });

});


//delete Test

router.get('/tests/post', (req, res) => {
    res.render('projectReview');
});

module.exports = router;