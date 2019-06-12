const mongoose = require('mongoose');

const workoutSchema = mongoose.Schema({
	name: { type: String, required: true},
	date: { type: String, required: true},
	exercises: { type: Array, required: true},
  icon: { type: String, required: true }
	//What is this thing below?
	//, creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

module.exports = mongoose.model('Workout', workoutSchema);
