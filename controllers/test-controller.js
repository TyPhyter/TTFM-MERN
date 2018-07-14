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
        project: req.body.project,//id
        author: req.body.author//id
    }

    const user_o_id = mongoose.Types.ObjectId(req.body.author);
    const project_o_id = mongoose.Types.ObjectId(req.body.project);


    db.Test.create(test)
        .then((test) => {

            db.User.findById(user_o_id)
                .then((user) => {
                    user.tests.push(test._id);
                    user.save();

                    db.Project.findById(project_o_id)
                        .then((project) => {
                            project.tests.push(test._id);
                            project.save();
                        });
                });

            res.send(test);
        });
});

//get Tests by project id
//this route is good to go!

router.get('/tests/:id?', (req, res) => {
    const _id = req.params.id;
    const o_id = mongoose.Types.ObjectId(_id);

    if(_id) {
        db.Test.findById(o_id)
        .populate('author')
        .populate('project')
        .then((test) => {
            res.send(test);
        })
        .catch((err) => {
            console.log('db.Test.findById' + err);
            res.status('400').send(err);
        });
    } else {
        db.Test.find({})
        .populate('author')
        .populate('project')
        .then((tests) => {
            res.send(tests);
        })
        .catch((err) => {
            console.log('db.Test.find({})' + err);
            res.status('400').send(err);
        });
    }

    

    
});

router.get('/tests/projects/:id', (req, res) => {
    //this is the project id
    const _id = req.params.id;
    const o_id = mongoose.Types.ObjectId(_id);
        
    db.Project.findById(o_id)
        .populate('author')
        .populate('tests')
        .then((project) => {
            res.send(project.tests);
        })
        .catch((err) => {
            console.log('db.Project.findById' + err);
            res.status('400').send(err);
        });
   
});

//get Tests by user id

router.get('/tests/user/:id', (req, res) => {
    //this is the user id
    const _id = req.params.id;
    const o_id = mongoose.Types.ObjectId(_id);

    //update this line to mongoose syntax -- done
    db.User.findById(o_id)
        .populate('projects')
        .populate('tests')
        .then((user) => {
            res.send(user.tests);
        })
        .catch((err) => {
            console.log('db.Project.findById' + err);
            res.status('400').send(err);
        });

});

module.exports = router;