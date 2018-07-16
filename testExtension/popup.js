let button = document.querySelector('#btn');
//==========
// const express = require("express");
// const router = express.Router();
// const db = require("../models");
// const mongoose = require("mongoose");



button.onclick = function (evt) {
    // input.value = "CLICKED";
    console.log("input.value");

    chrome.tabs.captureVisibleTab(function(screenshotUrl) {
        input.value = 'captureVisibleTab';
        chrome.extension.getBackgroundPage().console.log('foo');
        chrome.extension.getBackgroundPage().console.log(screenshotUrl);

        let screenShotResult = document.querySelector('#scrnshot');

        screenShotResult.src = screenshotUrl;
        screenShotResult.style.width = '300px';
        screenShotResult.style.visibility = 'visible';
    });
   //========================================
    // router.post('/tests', (req, res) => {

    //     console.log('this is from the post route');
    //     //console.log(res);
    //     //console.log(req.body);
    //     let test = {
    //         title: req.body.title,
    //         body: req.body.body,
    //         score: req.body.score,
    //         authorDisplayName: req.body.authorDisplayName,
    //         authorGithubName: req.body.authorGithubName,
    //         authorAvatarUrl: req.body.authorAvatarUrl,
    //         ProjectId: req.body.ProjectId,
    //         UserId: req.body.UserId
    //     }


    //     db.Test.create(test)
    //         .then((test) => {
    //             res.send(test);
    //         });
    //     // res.render('index', {});
    // });

    



}