const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { Project } = require('./Project');
const { Test } = require('./Test');

const UserSchema = new Schema({
    email: {
        type: String,
        trim: true
    },
    passwordHash: {
        type: String,
        trim: true
    },
    token: {
        type: String,
        trim: true
    },
    displayName: {
        type: String,
        trim: true,
    },
    githubID: {
        type: String,
        trim: true
    },
    githubName: {
        type: String,
        trim: true
    },
    githubAlias: {
        type: String,
        trim: true
    },
    avatarUrl: {
        type: String,
    },

    //
    //GAMIFICATION PROPS
    points: {
        type: Number,
        default: 0
    },

    projects: {
        type: [Project]
    },
    tests: {
        type: [Test]
    },
    logins: {
        type: [Date]
    }
    //TO DO: create badge schema
    // badges: {
    //     type: [badge]
    // },

});

const User = mongoose.model("User", UserSchema);

module.exports = User;