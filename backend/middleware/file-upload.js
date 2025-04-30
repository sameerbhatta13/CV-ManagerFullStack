const multer = require('multer')
const fs = require('fs')

const path = require('path')

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        const filedestination = 'public/uploads/'

        if (!fs.existsSync(filedestination)) {
            fs.mkdirSync(filedestination, { recursive: true })
        }
        cb(null, filedestination) //contains two parameter first is error is msg and second is its destination
    },
    filename: (req, file, cb) => {
        const fileName = path.basename(file.originalname, path.extname(file.originalname))
        const extName = path.extname(file.originalname)
        cb(null, `${fileName}_${Date.now()}${extName}`)
    }
})

//filter the format

const fileFilter = (req, file, cb) => {
    const validFileType = /\.(jpg|png|jpeg|jfif|svg|pdf|doc|docx|gif)$/i

    if (!file.originalname.match(validFileType)) {
        return cb(new Error('only image and document file are allowed'), false)
    }
    cb(null, true)

}

exports.upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 10000000
    }
})

exports.handleMulterError = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: err.message })
    }
    else if (err) {
        return res.status(400).json({ error: err.message })
    }
    next()
}
