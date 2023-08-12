const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    video: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Video',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Comment', commentSchema);