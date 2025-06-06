const mongoose = require('mongoose')

const cvSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    technology: {
        type: String,
        required: true

    },
    level: {
        type: String,
        enum: ['junior', 'mid', 'senior'],
        default: 'junior',
        trim: true
    },
    salaryExp: {
        type: Number,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    reference: {
        type: String,
    },
    file: {
        type: String,
        required: true

    },
    applicationStatus: {
        type: String,
        enum: ["Active", "shortlisted", "First_Interview", "Second_Interview", " Hired", "Rejected"],
        default: "Active",
        trim: true
    },
    assessment: {
        type: String,
    },
    remarks: {
        type: String
    }



}, { timestamps: true })

module.exports = mongoose.model('CV', cvSchema)