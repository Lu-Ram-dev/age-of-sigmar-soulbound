const mongoose = require('mongoose');
const effectSchema = require('./path/to/effect');  // Asegúrate de que la ruta sea correcta

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
  speciesBonus: [effectSchema], // Usamos el mismo esquema de efectos que para los talentos
  passiveEffects: [effectSchema], // Efectos pasivos que puede tener la especie
});

module.exports = specieSchema