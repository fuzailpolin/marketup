import FormDataParser from '../../../tools/FormDataParser'
import JobsModel from '../../../tools/db/Model/JobsModel'
import connectDB from '../../../tools/db/connection'
import Response from '../../../tools/Response'

// import validators
import jobsDataValidator from '../../../tools/validators/jobs/jobsDataValidator'

export const config = {
    api: {
        bodyParser: false
    }
}

/**
 * @method POST
 *
 * @requires FromData
 *
 * @param position String
 * @param vacancy Number
 * @param job_type String
 * @param last_date Date
 * @param fb String
 * @param insta String
 *
 * @return JobsModel
 *
 * */
export default async (req, res) => {
    const { method } = req;

    if(method != 'POST'){
        return res.status(404).send()
    }

    try{
        await connectDB();
        const {fields} = await FormDataParser(req)

        const errors = jobsDataValidator({fields})

        if(errors){
            return res.status(422).send(Response({
                status_code: 422,
                errors,
                message: 'Invalid inputs!'
            }))
        }

        // save data to db
        const jobs = await JobsModel.create({
            position: fields?.position?.trim(),
            vacancy: fields?.vacancy,
            jobType: fields?.jobType?.trim(),
            lastDate: fields?.lastDate,
            fb: fields?.fb?.trim(),
            insta: fields?.insta?.trim()
        })

        // return to client
        return res.status(201).send(
            Response({
                data: jobs,
                message: 'New jobs added!',
                status_code: 201
            })
        )


    }catch (e) {
        res.status(400).send(Response({
            message: e.message,
            status_code: 400
        }))
    }


}
