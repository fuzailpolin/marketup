const updateTeamValidator = ({files, fields}) => {

    const errors = {}
    // name validator
    if(fields?.name){
        if(fields.name.trim().length < 3) {
            errors.name = 'Minimum 3 character allows!'
        }
    }else{
        errors.name = 'Name is required!'
    }


    // designation validator
    if(fields?.designation){
        if(fields.designation.trim().length < 2){
            errors.designation = 'Minimum 2 character allows!'
        }
    }else{
        errors.designation = 'Designation is required!'
    }

    // image validator
    if(files?.image){
        if(files.image.type == 'image/png' || files.image.type == 'image/jpg' || files.image.type == 'image/jpeg'){

        }else{
            errors.image = 'Only \'jpg, png, jpeg\' are allowed!'
        }
    }

    if(Object.keys(errors).length){
        return errors
    }
    return null
}

module.exports = updateTeamValidator
