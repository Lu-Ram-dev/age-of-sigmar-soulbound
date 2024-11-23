const mongoose = require ('mongoose')

const skillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    attribute: {
        type: String,
        enum: ['Body', 'Soul', 'Mind'],
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {type: Date, default: Date.now}
})

module.exports = skillSchema