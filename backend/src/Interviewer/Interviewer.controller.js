const ApiError = require('../../utils/apiError')
const ApiResponse = require('../../utils/apiResponse')
const asyncHandler = require('../../utils/asyncHandler')
const Interviewer = require('./Interviewer.model')

exports.postInterviewer = asyncHandler(async (req, res) => {
    const { name, position, department } = req.body

    let list = new Interviewer({
        name,
        position,
        department
    })

    await list.save()

    res.status(200).json(new ApiResponse('interviewer added successfully', list))

})

exports.getInterviewer = asyncHandler(async (req, res) => {
    const list = await Interviewer.find().populate('interviewer')
    if (!list) {
        throw new ApiError('interviewer not available', 400)
    }
    res.status(200).json(new ApiResponse('here is list of interviewer', list))
})