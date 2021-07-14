import TestimonialModel from '../../../tools/db/Model/TestimonialModel'
import connectDB from '../../../tools/db/connection'
import Response from '../../../tools/Response'


/**
 * @method GET
 *
 * @return [TestimonialModel]
 *
 * */
export default async (req, res) => {
    if(req.method !== 'GET'){
        return res.status(400).send()
    }

    try{
        await connectDB();
        const testimonials = await TestimonialModel.find({})
        res.send(
            Response({
                status_code: 200,
                data: testimonials
            })
        )
    }catch (e) {
        res.status(500).send(
            Response(
                {
                    message: e.message,
                    status_code: 500
                }
            )
        )
    }
}
