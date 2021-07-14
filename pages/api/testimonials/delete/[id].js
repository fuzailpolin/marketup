import connectDB from '../../../../tools/db/connection'
import TestimonialModel from '../../../../tools/db/Model/TestimonialModel'
import mongoose from 'mongoose'
import Response from '../../../../tools/Response'

export const config = {
    api: {
        bodyParser: false
    }
}

/**
 * @method DELETE
 *
 * @query_params ObjectID
 *
 * @return
 * */
const handler = async (req, res) => {

    if (req.method !== 'DELETE') {
        return res.status(404).send()
    }

    try {
        const {query: {id: testimonialId}} = req;

        if (!mongoose.Types.ObjectId.isValid(testimonialId)) {
            return res.status(404).send()
        }
        await connectDB();

        const testimonial = await TestimonialModel.findById(testimonialId)
        if (!testimonial) {
            return res.status(404).send()
        }

        await testimonial.delete()

        return res.status(201).send(
            Response({
                status_code: 200,
                message: 'Testimonial deleted successfully!!'
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
