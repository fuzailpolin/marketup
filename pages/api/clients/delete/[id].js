import connectDB from '../../../../tools/db/connection'
import ClientModel from '../../../../tools/db/Model/ClientsModel'
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
        const {query: {id: clientId}} = req;

        // object id validation
        if (!mongoose.Types.ObjectId.isValid(clientId)) {
            return res.status(404).send()
        }
        await connectDB();

        const client = await ClientModel.findById(clientId)
        // db existence validation
        if (!client) {
            return res.status(404).send(
                Response({
                    status_code: 404,
                    message: 'Logo id doesnot exist!!'
                })
            )
        }


        const prevId = client.image


        // delete from db
        await client.delete()

        // delete image form cloudinary
        await cloudinary.v2.uploader.destroy(prevId);


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
