import connectDB from '../../../../tools/db/connection'
import JobsModel from '../../../../tools/db/Model/JobsModel'
import mongoose from 'mongoose'
import FormDataParser from '../../../../tools/FormDataParser'
import jobsDataValidator from '../../../../tools/validators/jobs/jobsDataValidator'
import Response from '../../../../tools/Response'

export const config = {
    api: {
        bodyParser: false
    }
}


/**
 * @method PUT
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
const handler = async (req, res) => {

    if (req.method !== 'PUT') {
        return res.status(404).send()
    }

    try {
        const {query: {id: jobsId}} = req;

        // object id validation
        if (!mongoose.Types.ObjectId.isValid(jobsId)) {
            return res.status(404).send()
        }
        await connectDB();


        const jobs = await JobsModel.findById(jobsId)
        // db existence validation
        if (!jobs) {
            return res.status(404).send()
        }

        // parse the form from FormData
        const {fields} = await FormDataParser(req);


        const errors = jobsDataValidator({fields});
        // return if error
        if (errors) {
            return res.status(422).send(
                Response({
                    errors,
                    status_code: 422,
                    message: 'Invalid inputs!'
                })
            )
        }
        
        //alter data if any updated
        jobs.position = fields?.position?.trim(),
        jobs.vacancy = fields?.vacancy,
        jobs.jobType = fields?.jobType?.trim(),
        jobs.lastDate = fields?.lastDate,
        jobs.fb = fields?.fb?.trim(),
        jobs.insta = fields?.insta?.trim()

        await jobs.save()

        return res.status(201).send(
            Response({
                data: jobs,
                status_code: 201,
                message: 'Update complete!'
            })
        )
    } catch (e) {
        res.status(500).send(
            Response({
                message: e.message,
                status_code: 500
            })
        )
    }


}


export default handler
