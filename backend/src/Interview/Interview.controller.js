const ApiError = require("../../utils/apiError");
const ApiResponse = require("../../utils/apiResponse");
const asyncHandler = require("../../utils/asyncHandler");
const CV = require('../CVCollector/CV.model')
const Interview = require('./Interview.modal')

exports.postInterview = asyncHandler(async (req, res) => {
    const { interviewer, date, time, candidate } = req.body

    const combinedDate = new Date(`${date}T${time}`)

    const findCandidate = await CV.findById(candidate)
    if (!findCandidate) {
        throw new ApiError('no candidate exists', 400)
    }
    const existingInterview = await Interview.findOne({ candidate })
    if (existingInterview) {
        throw new ApiError('interview is already schedule', 400)
    }
    let interview = new Interview({
        interviewer,
        interviewAt: combinedDate,
        candidate
    })

    await CV.findOneAndUpdate({ _id: candidate }, {
        applicationStatus: 'shortlisted'
    }, { new: true })
    await interview.save()

    res.status(200).json(new ApiResponse('interview is scheduled', interview))
})

exports.getallInterview = asyncHandler(async (req, res) => {
    const interviewList = await Interview.find()
        .populate('interviewer', 'name position -_id')
        .populate('candidate', 'name email technology file  -_id')

    if (!interviewList) {
        throw new ApiError('no list of item available', 400)
    }
    res.status(200).json(new ApiResponse('here is list of scheduled interview', interviewList))
})