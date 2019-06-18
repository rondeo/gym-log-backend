const mongoose = require('mongoose');

const workoutSchema = mongoose.Schema({
  name: { type: String, required: true},
  date: { type: String, required: true},
  exercises: { type: Array, required: true},
  icon: { type: String, required: true }
});

module.exports = mongoose.model('Workout', workoutSchema);
