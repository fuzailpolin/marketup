const Response = ({data, errors, status_code, message}) => (
    {
        data: data || null,
        errors: errors || null,
        status_code : status_code || 200,
        message: message || ''
    }
)

module.exports = Response
