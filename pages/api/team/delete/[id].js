import connectDB from '../../../../tools/db/connection'
import TeamModel from '../../../../tools/db/Model/TeamModel'
import mongoose from 'mongoose'
import Response from '../../../../tools/Response'
import cloudinary from '../../../../tools/cloudinary'

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
        const {query: {id: teamId}} = req;

        // object id validation
        if (!mongoose.Types.ObjectId.isValid(teamId)) {
            return res.status(404).send()
        }
        await connectDB();

        const team = await TeamModel.findById(teamId)
        // db existence validation
        if (!team) {
            return res.status(404).send()
        }


        const prevId = team.image


        // delete from db
        await team.delete()

        // delete image form cloudinary
        await cloudinary.v2.uploader.destroy(prevId);


        return res.status(201).send(
            Response({
                status_code: 200,
                message: 'Team delete successful!!'
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
