const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/workout', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const workoutSeed = [
  {
    exercise_type: "resistance",
    name: "lateral pull",
    duration: 10,
    weight: 20,
    reps: 10,
    sets: 4
  },
  {
    exercise_type: "resistance",
    name: "bench press",
    duration: 15,
    weight: 200,
    reps: 5,
    sets: 4
  },
  {
    exercise_type: "cardio",
    name: "running",
    duration: 10,
    distance: 20
  }
]


// seedfunc = (() => db.Workout.collection.insertMany(workoutSeed))
//   .then((data) => {
//     console.log(data.result.n + ' records inserted!');
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });

importseed = () => {
  db.workout.collection.insertMany(workoutSeed)
}
importseed();
