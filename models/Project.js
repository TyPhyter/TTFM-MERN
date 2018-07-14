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
    authorAvatarUrl: String,

    author: { type: Schema.Types.ObjectId, ref: 'User'},

    tests: [{ type: Schema.Types.ObjectId, ref: 'Test' }]
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;