const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    data: {
        type: Buffer,
        required: true
    },
    contentType: {
        type: String,
        required: true
    }
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;