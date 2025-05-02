const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const interviewSchema = new mongoose.Schema({
    interviewer: {
        type: ObjectId,
        ref: 'Interviewer',
        required: true

    },
    interviewAt: {
        type: Date
    },
    candidate: {
        type: ObjectId,
        ref: 'CV',
        required: true

    }
})

module.exports = mongoose.model('Interview', interviewSchema)