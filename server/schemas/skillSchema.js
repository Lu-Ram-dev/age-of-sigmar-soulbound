const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
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
  attribute: {
    type: String,
    enum: ['body', 'soul', 'mind'],
    required: true,
  },
  trainingLevel: {
    type: Number,
    enum: [1, 2, 3], // Nivel de entrenamiento de 1 a 3
    required: true,
  },
  focusLevel: {
    type: Number,
    enum: [1, 2, 3], // Nivel de enfoque de 1 a 3
    required: true,
  },
});

module.exports = skillSchema
