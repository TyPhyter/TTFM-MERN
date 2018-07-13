const express = require('express');
const router = express.Router();
const db = require('../models')
const mongoose = require('mongoose');




//add Test
// this route is good to go!
router.post('/tests', (req, res) => {
    
    console.log('this is from the post route');
    //console.log(res);
    //console.log(req.body);
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
            res.send(test);
        });
    // res.render('index', {});
});

//get Tests by project id
//this route is good to go!
router.get('/tests/projects/:id', (req, res) => {

    const _id = req.params.id;
    const o_id = mongoose.Types.ObjectId(_id);
        
    db.Test.findById(o_id)
        .then((tests) => {
            res.send(tests);
            console.log("this is the test res:  " + tests);
        })
        .catch((err) => {
            console.log('db.User.findById' + err);
            res.status('400').send(err);
        });
   
});

//get Tests by user id

router.get('/tests/user/:id', (req, res) => {

    const _id = req.params.id;
    const o_id = mongoose.Types.ObjectId(_id);

    //update this line to mongoose syntax -- done
    db.Test.findById(o_id)
        .then((tests) => {
            res.send(tests);
        });

});


//delete Test

router.get('/tests/post', (req, res) => {
    res.render('projectReview');
});

module.exports = router;