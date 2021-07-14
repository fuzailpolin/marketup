const jobsDataValidator = ({fields}) =>{
    const errors = {};

    //Position validator
    if(fields?.position == null || fields?.position === ''){
        errors.position = 'Position is required!'
    }

    //Vacancy validator
    if(fields?.vacancy == null || fields?.vacancy === ''){
        errors.vacancy = 'Vacancy is required!'
    }

    //Job Type validator
    if(fields?.jobType == null || fields?.jobType=== ''){
        errors.jobType = 'Job Type is required!'
    }

    //Last Date validator
    if(fields?.lastDate == null || fields?.lastDate === ''){
        errors.lastDate = 'Last Date is required!'
    }

    if(Object.keys(errors).length){
        return errors;
    }
    return null;
}

module.exports = jobsDataValidator;