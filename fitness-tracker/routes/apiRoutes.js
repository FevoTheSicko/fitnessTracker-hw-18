const router = require('express').Router()
const db = require('../models')
router.get('/', async (req, res) => {

    try {

        const lastWorkoutData = await db.Workout.findOne({}, {}, { sort: { date: -1 } }).populate('exercise')


        res.status(200).json(lastWorkoutData)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)


    }
})

router.post('/', async (req, res) => {
    try {
        const newWorkoutData = await db.Workout.create({ date: Date.now() })
        console.log(req.body)

        res.status(200).json(newWorkoutData)
    } catch (err) {
        res.status(500).json(newWorkoutData)
    }
})

router.put('/:id', (req, res) => {
    console.log(req.body)
    db.Exercise.create(
        {
            type: req.body.type,
            name: req.body.name,
            weight: req.body.weight,
            sets: req.body.sets,
            reps: req.body.duration
        })
        .then(({ _id }) => db.Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercise: _id } }, { new: true }))
        //db.Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercise: req.body._id } }, { new: true }))
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.json(err)
        })
})
router.get('/range', async (req, res) => {
    try {
        const workoutsData = await db.Workout.find().populate('exercise')
        res.status(200).json(workoutsData)
    } catch (error) {
        res.status(500).json(error)
    }
})






module.exports = router