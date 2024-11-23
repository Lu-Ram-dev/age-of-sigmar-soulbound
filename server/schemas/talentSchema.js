const mongoose = require('mongoose')
const effectSchema = require('./path/to/effect');
  
  const talentSchema = new mongoose.Schema({
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
    requirements: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Requirement', // Requisito de otro documento
      },
    ],
    effects: [effectSchema], // Lista de efectos estructurados
    maxUses: {
      type: Number,
      default: 1,
    },
    maxObtains: {
      type: Number,
      default: 1, // Por defecto solo se puede obtener una vez
    },
    isPassive: {
      type: Boolean,
      default: false, // Es falso por defecto, solo pasa a verdadero si es pasivo
    }
  });
  
 module.exports = talentSchema
  