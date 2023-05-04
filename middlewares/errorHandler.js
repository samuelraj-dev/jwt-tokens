import { CustomAPIError } from '../errors/customError'

const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ message: err.message })
    } else {
        return res.status(500).json({ message: `something went wrong, please try again later...` })
    }
}

export default errorHandler