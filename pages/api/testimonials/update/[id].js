import connectDB from '../../../../tools/db/connection'
import TestimonialModel from '../../../../tools/db/Model/TestimonialModel'
import mongoose from 'mongoose'
import FormDataParser from '../../../../tools/FormDataParser'
import testimonialDataValidator from '../../../../tools/validators/testimonials/testimonialDataValidator'
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
 * @param name String
 * @param text String
 * @param designation String
 * @param company String
 *
 * @return TestimonialModel
 *
 * */
const handler = async (req, res) => {

    if (req.method !== 'PUT') {
        return res.status(404).send()
    }

    try {
        const {query: {id: testimonialId}} = req;

        // object id validation
        if (!mongoose.Types.ObjectId.isValid(testimonialId)) {
            return res.status(404).send()
        }
        await connectDB();


        const testimonial = await TestimonialModel.findById(testimonialId)
        // db existence validation
        if (!testimonial) {
            return res.status(404).send()
        }

        // parse the form from FormData
        const {fields} = await FormDataParser(req);


        const errors = testimonialDataValidator({fields});
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
        testimonial.name = fields?.name?.trim();
        testimonial.designation = fields?.designation?.trim();
        testimonial.company = fields?.company?.trim();
        testimonial.text = fields?.text?.trim();

        await testimonial.save()

        return res.status(201).send(
            Response({
                data: testimonial,
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
