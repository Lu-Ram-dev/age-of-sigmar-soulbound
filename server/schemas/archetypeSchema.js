const mongoose = require ('mongoose')

const archetypeSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    initial_attributes: {
        body: { type: Number, default: 0 },
        mind: { type: Number, default: 0 },
        soul: { type: Number, default: 0 }
    },
    initial_xp: { type: Number, default: 0 },
    allowed_species: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Specie' }],
    core_skills: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill' }],
    allowed_skills: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill' }],
    initial_talent: { type: Number, default: 0 },
    core_talents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Talent' }],
    allowed_talents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Talent' }],
    equipment: [{
        equipment_type: { type: mongoose.Schema.Types.ObjectId, ref: 'Equipment' },
        description: {type: String, trim: true},
        amount: { type: Number, default: 1 }
    }],
    createdAt: { type: Date, default: Date.now }
})

module.exports = archetypeSchema;