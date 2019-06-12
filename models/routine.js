const mongoose = require('mongoose');

const routineSchema = mongoose.Schema({
	name: { type: String, required: true},
	exercises: { type: Array, required: true},
	icon: { type: String, required: true},
	creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

module.exports = mongoose.model('Routine', routineSchema);
