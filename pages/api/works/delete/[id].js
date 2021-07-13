import connectDB from '../../../../tools/db/connection'
import WorksModel from '../../../../tools/db/Model/WorksModel'
import mongoose from 'mongoose'
import Response from '../../../../tools/Response'
import cloudinary from '../../../../tools/cloudinary'

export const config = {
    api: {
        bodyParser: false
    }
}

const handler = async (req, res) => {

    if (req.method !== 'DELETE') {
        return res.status(404).send()
    }

    try {
        const {query: {id: workId}} = req;

        if (!mongoose.Types.ObjectId.isValid(workId)) {
            return res.status(404).send()
        }
        await connectDB();

        const work = await WorksModel.findById(workId)
        if (!work) {
            return res.status(404).send()
        }


        const prevId = work.image


        await work.delete()

        await cloudinary.v2.uploader.destroy(prevId);

        return res.status(201).send(
            Response({
                status_code: 200,
                message: 'Work deleted successfully!!'
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
