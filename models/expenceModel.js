//expenceModel.js

const mongoose = require('mongoose');

const expencesSchema = new mongoose.Schema({
    expence: {
        type: String,
        required: [true, 'mandatory field'],
    },
    note: {
        type: String,
    },
    sum: {
        type: Number,
        required: [true, 'mandatory field'],
    },
    date: {
        type: Date,
        required: [true, 'mandatory field'],
    }
});

const Expences = mongoose.model('Expences', expencesSchema);

module.exports = Expences;
