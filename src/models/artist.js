const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contactPhone: {
        type: String,
        required: true
    },
    created_At: {
        type: Date,
        required: true,
        default: new Date
    }
});

module.exports = mongoose.model('artist', artistSchema);