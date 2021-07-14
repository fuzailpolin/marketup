const testimonialDataValidator = ({fields}) =>{
    const errors = {};

    //name validator
    if(fields?.name){
        if(fields.name.trim().length < 3) {
            errors.name = 'Minimum 3 character allows!'
        }
    }else{
        errors.name = 'Name is required!'
    }

    //text validator
    if(fields?.text == null || fields?.text === ''){
        errors.text = 'Text is required!'
    }

    //designation validator
    if(fields?.designation == null || fields?.designation === ''){
        errors.designation = 'Designation is required!'
    }

    //company validator
    if(fields?.company == null || fields?.company === ''){
        errors.company = 'Company is required!'
    }

    if(Object.keys(errors).length){
        return errors;
    }
    return null;
}

module.exports = testimonialDataValidator;