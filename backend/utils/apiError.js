class ApiError extends Error {
    constructor(message, statuscode) {
        super(message, statuscode)
        this.statuscode = statuscode
        this.status = (statuscode >= 400) && (statuscode < 500) ? 'fail' : 'internal server errror'
        this.isOperational = true
        Error.captureStackTrace(this, this.constructor)
    }

}

module.exports = ApiError