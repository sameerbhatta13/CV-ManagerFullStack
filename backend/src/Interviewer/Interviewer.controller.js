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