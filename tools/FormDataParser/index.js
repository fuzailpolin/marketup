const Formidable = require('formidable')


/**
 *
 * @param req :Request
 *
 * @return {files, fields}
 *
 * */
module.exports = (req) => (
    new Promise((resolve, reject) => {
        const form = new Formidable({multiples: true})

        form.parse(req, (err, fields, files) => {
            if(err){
                reject(err)
            }

            resolve({files, fields})
        })
    })
)
