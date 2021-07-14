import connectDB from '../../../../tools/db/connection'
import ClientModel from '../../../../tools/db/Model/ClientsModel'
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
        const {query: {id: clientId}} = req;

        // object id validation
        if (!mongoose.Types.ObjectId.isValid(clientId)) {
            return res.status(404).send()
        }
        await connectDB();

        const client = await ClientModel.findById(clientId)
        // db existence validation
        if (!client) {
            return res.status(404).send()
        }


        const prevId = client.image


        // delete from db
        await client.delete()

        // delete image form cloudinary
        await deleteImage(prevId);


        return res.status(201).send(
            Response({
                status_code: 200,
                message: 'Client logo deleted successfully!!'
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
