const createContactValidator = ({files, fields}) => {
    const errors = {}
    // name validator
    if(fields?.name){

    }else{
        errors.name = 'Name is required!'
    }


    // Email validator
    if(fields?.email){

    }else{
        errors.email = 'Email is required!'
    }

    // Phone validator
    if(fields?.phone){

    }else{
        errors.phone = 'Phone is required!'
    }

    // Phone validator
    if(fields?.message){

    }else{
        errors.message = 'Message is required!'
    }

    if(Object.keys(errors).length){
        return errors
    }
    return null
}

module.exports = createContactValidator
