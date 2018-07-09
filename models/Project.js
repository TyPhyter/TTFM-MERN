const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    body: String,
    hostedUrl: {
        type: String,
        trim: true
    },
    title: {
        type: String,
        trim: true,
        required: "Title is Required."
    },
    repoUrl: {
        type: String,
        trim: true
    },
    views: {
        type: Number,
        defaultValue: 0
    },
    closed: {
        type: Boolean,
        defaultValue: false
    },
    flagged: {
        type: Boolean,
        defaultValue: false
    },
    authorAvatarUrl: String
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;