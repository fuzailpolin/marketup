const cloudinary = require('./index')
const datauri = require('datauri')

module.exports = (file, folder) => {
    return new Promise((resolve, reject) => {
        datauri(file.path).then(bs => {
            cloudinary.v2.uploader.upload(bs, {folder: folder}, (err, result) => {
                if(err){
                    reject(err)
                }
                resolve(result)
            })
        }).catch(err => {
            reject(err)
        })
    })
}
