const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { Project } = require('./Project');
const { Test } = require('./Test');
const { Achievement } = require('../middleware/gamify/Achievement');

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

    projects: [{ type:Schema.Types.ObjectId, ref: 'Project' }],

    tests: [{ type:Schema.Types.ObjectId, ref: 'Test' }],

    logins: {
        type: [Date]
    },

    achievements: {
        type: [Achievement]
    }
    
    // tests: {
    //     type: [Test]
    // },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;