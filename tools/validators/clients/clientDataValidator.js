const clientDataValidator = ({files, create}) => {
    const errors = {}

    // image validator
    if(create){
        if(files?.image){
            if(files.image.type == 'image/png' || files.image.type == 'image/jpg' || files.image.type == 'image/jpeg'){
    
            }else{
                errors.image = 'Only \'jpg, png, jpeg\' are allowed!'
            }
        }else{
            errors.image = 'Image is required!'
        }
    }
    else{
        if(files?.image){
            if(files.image.type == 'image/png' || files.image.type == 'image/jpg' || files.image.type == 'image/jpeg'){
    
            }else{
                errors.image = 'Only \'jpg, png, jpeg\' are allowed!'
            }
        }
    }

    if(Object.keys(errors).length){
        return errors
    }
    return null
}

module.exports = clientDataValidator
