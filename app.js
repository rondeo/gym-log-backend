const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const path = require('path');
const cors = require('cors');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("./models/user");
const Routine = require('./models/routine');
const Workout = require('./models/workouts');

//DEFINING PORT NUMBER
const port = process.env.PORT || 8080;

//CONNECTING TO DATABASE - 20:00 of video 1
/*mongoose.connect("mongodb+srv://ayodlo:PhNrB6JXfsRIhFGw@cluster0-0hpwg.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true })
  .then(() => {
	  console.log('Connected to database!')
  })
  .catch((error) => {
	  console.log(error);
  });*/

//CORS MIDDLEWARE
app.use(cors());

//SET STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')));

//PARSING THE BODY
app.use(bodyParser.json());

//START SERVER
app.listen(port, () => {
	console.log('Server started on port' + port);
});

//GET ROUTINES
app.get("/api/routines", (req, res, next) => {
	Routine.find({creator: req.userData.userId})
	  .then(documents => {
		  res.status(200).json({
			  message: "Saved Routines fetched successfully!",
			  routines: documents
		  })
	  });
});

//SAVE ROUTINES
app.post("/api/routines", (req, res, next) => {
	const workout = new Routine({
	  name: req.body.name,
	  exercises: req.body.exercises,
    icon: req.body.icon,
    creator: req.userData.userId
	});
	workout.save();
	console.log(workout);
	res.status(201).json({
		message:'Workout post added successfully'
	});
})

//DELETE ROUTINES
app.delete("/api/routines/:id", (req, res, next) => {
	Routine.deleteOne({_id: req.params.id, creator: req.userData.userId}).then(result => {
		console.log(result);
		res.status(200).json({message: "Post deleted!"});
	})

})

//GET WORKOUTS
app.get("/api/workouts", (req, res, next) => {
	Workout.find()
	  .then(documents => {
		  res.status(200).json({
			  message: "Saved Workouts fetched successfully!",
			  workouts: documents
		  })
	  });
});

//SAVE WORKOUTS
app.post("/api/workouts", (req, res, next) => {
	console.log(req.body);
	const workout = new Workout({
	  name: req.body.name,
	  date: req.body.date,
	  icon: req.body.icon,
	  exercises: req.body.exercises
	});
	workout.save();
	//console.log(workout.exercises[0]);
	//console.log(workout.date);
	//console.log(workout.name);
	//console.log(workout.icon);
	res.status(201).json({
		message:'Saved Workout added successfully'
	});
})

//DELETE WORKOUTS
app.delete("/api/workouts/:id", (req, res, next) => {
	Workout.deleteOne({_id: req.params.id}).then(result => {
		console.log(result);
		res.status(200).json({message: "Workout deleted!"});
	})
});

app.post("/api/signup", (req, res, next) => {
	bcrypt.hash(req.body.password, 10)
	  .then(hash => {
		const user = new User ({
		  email: req.body.email,
		  password: hash
		});
		user.save()
		  .then(result => {
			res.status(201).json({
			  message: 'User created!',
			  result: result
			})
		  })
		  .catch(err => {
			res.status(500).json({
			  error: err
			});
		  });
	  });
  });
  
  app.post("/api/signin", (req, res, next) => {
	let fetchedUser;
	User.findOne({ email: req.body.email })
	  .then( user => {
		if (!user) {
		  console.log("Error 2 - !user");
		  return res.status(401).json({
			message: "Auth Failed"
		  })
		}
		fetchedUser = user;
		return bcrypt.compare(req.body.password, user.password);
	  })
	  .then(result => {
		if (!result) {
		  console.log("Error 3 - !result");
		  return res.status(401).json({
			message: "Auth failed"
		  })
		}
		const token = jwt.sign({email: fetchedUser.email, userId: fetchedUser._id}, 'secret_this_should_be_longer', {expiresIn: '1h'});
		res.status(200).json({
		  token: token,
		  expiresIn: 3600,
		  message: "Auth Accepted!"
		});
	  })
	  .catch(err => {
		console.log("Error 4");
		return res.status(401).json({
		  message: "Auth failed"
		})
	  })
  })

module.exports = app;
