const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true,
        default: 0
    },
    composer: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    letter: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    created_At: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('music', musicSchema);

