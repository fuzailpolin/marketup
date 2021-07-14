import connectDB from '../../../../tools/db/connection'
import HomeSliderModel from '../../../../tools/db/Model/HomeSlider'
import mongoose from 'mongoose'
import Response from '../../../../tools/Response'
import deleteImage from '../../../../tools/cloudinary/delete'

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
        const {query: {id: sliderId}} = req;

        // object id validation
        if (!mongoose.Types.ObjectId.isValid(sliderId)) {
            return res.status(404).send()
        }
        await connectDB();

        const slide = await HomeSliderModel.findById(sliderId)
        // db existence validation
        if (!slide) {
            return res.status(404).send()
        }


        const prevId = slide.image


        // delete from db
        await slide.delete()

        // delete image form cloudinary
        await deleteImage(prevId);


        return res.status(201).send(
            Response({
                status_code: 200,
                message: 'Slide deleted successfully!!'
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
