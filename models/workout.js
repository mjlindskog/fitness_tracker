const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Please enter the type of exercise"
                },
                name: {
                    type: String, 
                    trim: true,
                    required: "Please enter the name of the exercise"
                },
                duration: {
                    type: Number,
                    required: "Enter the duration of the exercise"
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                },
            }
        ],
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

workoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce(function(total, exercise) {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;