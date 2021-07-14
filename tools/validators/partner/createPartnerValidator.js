const createPartnerValidator = ({files, fields}) => {
    const errors = {};

    // image validator
    if (files?.image) {
        if (files.image.type == 'image/png' || files.image.type == 'image/jpg' || files.image.type == 'image/jpeg') {

        } else {
            errors.image = 'Only \'jpg, png, jpeg\' are allowed!'
        }

    } else {
        errors.image = 'Image is required!'
    }

    // company logo validator
    if (files?.company_logo) {
        if (files.company_logo.type == 'image/png' || files.company_logo.type == 'image/jpg' || files.company_logo.type == 'image/jpeg') {

        } else {
            errors.company_logo = 'Only \'jpg, png, jpeg\' are allowed!'
        }

    } else {
        errors.company_logo = 'Image is required!'
    }

    // name validator
    if(fields?.name){
        if(fields.name.trim() > 12){
            errors.name = 'Maximum 12 character allow!'
        }else if(fields.name.trim() < 3){
            errors.name = 'Minimum 3 character allow!'
        }
    }else{
        errors.name = 'Name is required!'
    }


    // designation validator
    if(fields?.designation){
        if(fields.designation.trim() > 15){
            errors.designation = 'Maximum 15 character allow!'
        }else if(fields.designation.trim() < 3){
            errors.designation = 'Minimum 3 character allow!'
        }
    }else{
        errors.designation = 'Designation is required!'
    }



    // text validator
    if(fields?.text){
        if(fields.text.trim() > 500){
            errors.text = 'Maximum 500 character allow!'
        }else if(fields.text.trim() < 150){
            errors.text = 'Minimum 150 character allow!'
        }
    }else{
        errors.text = 'Text is required!'
    }


    if(Object.keys(errors).length){
        return errors
    }
    return null
}


module.exports = createPartnerValidator
