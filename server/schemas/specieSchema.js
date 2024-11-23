const mongoose = require ('mongoose')

const specieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    specieBonus: {
        description: {
            type: String,
            trime: true,
            required: true
        },
        extraXp:{
            type: Number,
            default: 0,
        },
        extraTalents: {
            type: Number,
            default: 0
        },
        extraWounds: {
            type: Number,
            default: 0
        },
        extraArmor: {
            type: Number,
            default: 0
        }
    } 
})

module.exports = specieSchema