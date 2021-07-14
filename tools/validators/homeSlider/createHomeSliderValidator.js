const createHomeSliderValidator = ({files, create}) => {
    const errors = {}

    // image validator
    if(create){
        if(files?.image){
            if(files.image.type == 'image/png' || files.image.type == 'image/jpg' || files.image.type == 'image/jpeg' || files.image.type == 'image/gif'){

            }else{
                errors.image = 'Only \'jpg, png, jpeg, gif\' are allowed!'
            }
        }else{
            errors.image = 'Image is required!'
        }
    }
    else{
        if(files?.image){
            if(files.image.type == 'image/png' || files.image.type == 'image/jpg' || files.image.type == 'image/jpeg' || files.image.type == 'image/gif'){

            }else{
                errors.image = 'Only \'jpg, png, jpeg, gif\' are allowed!'
            }
        }
    }

    if(Object.keys(errors).length){
        return errors
    }
    return null
}

module.exports = createHomeSliderValidator
