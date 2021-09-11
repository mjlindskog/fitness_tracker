const router = require('express').Router();

const Workout = require('../models/workout');

router.get("/api/workouts", (req, res) => {
    Workout.find({}).then((workoutData) => {
        res.json(workoutData);
    }).catch((err) => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(10).then((workoutData) => {
        res.json(workoutData);
    }).catch((err) => {
        res.status(400).json(err);
    });
});

router.post("/api/workouts", (req, res) => {
    Workout.create({}).then((workoutData) => {
        res.json(workoutData);
    }).catch((err) => {
        res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({body, params} , res) => {
    Workout.findByIdAndUpdate(
        {_id: params.id },
        { $push: {exercises: body} },
        {new: true, runValidators: true}
    )
    .then((workoutData) => {
        res.json(workoutData);
    }).catch((err) => {
        res.status(400).json(err);
    });
});


module.exports = router;
