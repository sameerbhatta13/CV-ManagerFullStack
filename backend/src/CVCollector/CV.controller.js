const ApiError = require("../../utils/apiError");
const ApiResponse = require("../../utils/apiResponse");
const asyncHandler = require("../../utils/asyncHandler");
const CV = require('./CV.model')

exports.postCV = asyncHandler(async (req, res) => {
    if (!req.file) {
        throw new ApiError('cv file is required')
    }

    const { name, phone, email, technology, level, salaryExp, experience, reference } = req.body

    let cv = new CV({
        name,
        phone,
        email,
        technology,
        level,
        salaryExp,
        experience,
        reference,
        file: req.file.filename
    })
    await cv.save()
    res.status(200).json(new ApiResponse('cv collected successfully', cv))
})


exports.getAllCV = asyncHandler(async (req, res) => {
    const cvList = await CV.find().sort({ createdAt: -1 })
    if (!cvList) {
        throw new ApiError('no cv is listed', 400)
    }
    res.status(200).json(new ApiResponse('here is list of cv', cvList))
})


exports.updateCV = asyncHandler(async (req, res) => {
    if (req.file) {
        const file = req.file.filename
        const data = await CV.findByIdAndUpdate(req.params.id, {
            ...req.body, file: file
        }, { new: true })
        res.status('200').json(new ApiResponse('cv is updated successfully', data))
    }
    else {
        const data = await CV.findByIdAndUpdate(req.params.id, { ...req.body }, {
            new: true
        })
        res.status('200').json(new ApiResponse('cv is updated successfully', data))
    }
})