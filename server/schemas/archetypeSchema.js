const mongoose = require('mongoose');

const archetypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  attributes: {
    body: { type: Number, required: true, min: 0 },
    soul: { type: Number, required: true, min: 0 },
    mind: { type: Number, required: true, min: 0 },
  },
  skills: [
    {
      skill: { type: mongoose.Schema.Types.ObjectId, ref: 'Skill' },
      isCore: { type: Boolean, default: false },  // Indica si esta habilidad es core para el archetype
    },
  ],
  talents: [
    {
      talent: { type: mongoose.Schema.Types.ObjectId, ref: 'Talent' },
      isCore: { type: Boolean, default: false },  // Indica si este talento es core para el archetype
    },
  ],
  experiencePoints: { type: Number, default: 0 },  // XP disponible para comprar habilidades y talentos
  maxTalents: { type: Number, default: 1 }, // Número máximo de talentos seleccionables
  equipment: [
    {
      item: { type: mongoose.Schema.Types.ObjectId, ref: 'Equipment' },  // Referencia al equipo
      description: { type: String, trim: true },  // Descripción del equipo
      quantity: { type: Number, default: 1 },  // Cantidad de piezas de equipo
    },
  ],
  species: [
    {
      species: { type: mongoose.Schema.Types.ObjectId, ref: 'Specie' },  // Referencia a la especie
    },
  ],
});

module.exports = archetypeSchema
