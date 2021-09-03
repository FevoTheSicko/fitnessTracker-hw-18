const mongoose = require('mongoose')
const Exercise = require('./exercisemodel')
const Schema = mongoose.Schema

const WorkoutSchema = new Schema({
    date: {
        type: Date,
        require: true
    },
    exercise: [
        {
            type: Schema.Types.ObjectId,
            ref: "Exercise"
        }
    ]
}, { collection: 'workouts' })
const Workout = mongoose.model('Workout', WorkoutSchema)

module.exports = Workout

