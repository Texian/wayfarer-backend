const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {
        city: String,
        title: String,
        body: { type: String, maxlength: 100},
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            }
    },{timestamps: true});

    module.exports = mongoose.model('Post', PostSchema); 