const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: "Title is required"
    },
    body: {
        type: Text,
        trim: true
    },
    score: {
        type: Interger,
        trim: true,
    },
    authorAvatarUrl: {
        type: String,
        trim: true
    },
    authorDisplayName: {
        type: String,
        trim: true
    },
    authorGithubName: {
        type: String,
        trim: true
    },
    accepted: {
        type: Boolean,
        defaultValue: false
    },
    rejectted: {
        type: Boolean,
        defaultValue: false
    },
    flagged: {
        type: Boolean,
        defaultValue: false
    }
});

//creates new model with our schema using the mongoose model method.
const Test = mongoose.model("Test", TestSchema);


module.exports = Test;