const Formidable = require('formidable')

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
