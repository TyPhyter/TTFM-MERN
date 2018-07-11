const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AchievementSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    imageSrc: {
        type: String,
        trim: true
    },
    message: {
        type: String,
        trim: true
    }
});

const Achievement = mongoose.model("Achievement", AchievementSchema);

module.exports = Achievement;