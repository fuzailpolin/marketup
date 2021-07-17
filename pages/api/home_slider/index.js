import HomeSliderModel from '../../../tools/db/Model/HomeSlider'
import connectDB from '../../../tools/db/connection'
import Response from '../../../tools/Response'


/**
 * @method GET
 *

 * @return [HomeSliderModel]
 *
 * */
export default async (req, res) => {
    if(req.method !== 'GET'){
        return res.status(400).send()
    }

    try{
        await connectDB();
        const homeSlides = await HomeSliderModel.find({}).sort({'created_at': '-1'})
        res.send(
            Response({
                data: homeSlides
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
