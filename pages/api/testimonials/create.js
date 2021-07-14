import FormDataParser from '../../../tools/FormDataParser'
import TestimonialModel from '../../../tools/db/Model/TestimonialModel'
import connectDB from '../../../tools/db/connection'
import Response from '../../../tools/Response'

// import validators
import testimonialDataValidator from '../../../tools/validators/testimonials/testimonialDataValidator'

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
 * @param name String
 * @param designation String
 * @param text String
 * @param company String
 *
 * @return TestimonialModel
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

        const errors = testimonialDataValidator({fields})

        if(errors){
            return res.status(422).send(Response({
                status_code: 422,
                errors,
                message: 'Invalid inputs!'
            }))
        }

        // save data to db
        const testimonial = await TestimonialModel.create({
            name: fields?.name?.trim(),
            designation: fields?.designation?.trim(),
            company: fields?.company?.trim(),
            text: fields?.text?.trim()
        })

        // return to client
        return res.status(201).send(
            Response({
                data: testimonial,
                message: 'New testimonial added!',
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
