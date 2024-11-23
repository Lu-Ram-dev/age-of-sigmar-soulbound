const mongoose = require('mongoose');

const requirementsSchema = new mongoose.Schema({
  skillTrainingLevel: {
    type: Number,
    min: 1,
    max: 3,
  },
  skillFocusLevel: {
    type: Number,
    min: 1,
    max: 3,
  },
  species: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Species',
  },
  equipment: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Equipment',
  }],
  customRequirement: {
    type: String, // Puede ser cualquier requisito específico adicional
    trim: true,
  },
});

module.exports = requirementsSchema
