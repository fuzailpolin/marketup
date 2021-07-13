const worksDataValidator = ({files, fields}) => {
    const errors = {}
    // company name validator
    if(fields?.company == null || fields?.work === ''){
        errors.company = 'Company name is required!'
    }


    // works validator
    if(fields?.work == null || fields?.work === ''){
        errors.work = 'work is required!'
    }

    // image validator
    if(files?.image){
        if(files.image.type == 'image/png' || files.image.type == 'image/jpg' || files.image.type == 'image/jpeg'){

        }else{
            errors.image = 'Only \'jpg, png, jpeg\' are allowed!'
        }
    }else{
        errors.image = 'Image is required!'
    }


    if(Object.keys(errors).length){
        return errors
    }
    return null
}

module.exports = worksDataValidator
