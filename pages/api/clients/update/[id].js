import connectDB from '../../../../tools/db/connection'
import ClientModel from '../../../../tools/db/Model/ClientsModel'
import mongoose from 'mongoose'
import FormDataParser from '../../../../tools/FormDataParser'
import upload from '../../../../tools/cloudinary/upload'
import clientDataValidator from '../../../../tools/validators/clients/clientDataValidator'
import Response from '../../../../tools/Response'
import cloudinary from '../../../../tools/cloudinary'

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
 * @param image File image/png, image/jpg, image/jpeg
 *
 * @return ClientModel
 *
 * */
const handler = async (req, res) => {

    if (req.method !== 'PUT') {
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

        // parse the form from FormData
        const {files} = await FormDataParser(req);


        const errors = clientDataValidator({files, create:false});
        // return if error
        if (errors) {
            return res.status(422).send(
                Response({
                    errors,
                    status_code: 422,
                    message: 'Invalid input!'
                })
            )
        }


        const prevId = client.image

        if (files?.image) {
            const {public_id} = await upload(files.image, 'clients');
            client.image = public_id;
        }

        await client.save()

        // delete previous image if new have
        if (files?.image) {
            await cloudinary.v2.uploader.destroy(prevId);
        }

        return res.status(201).send(
            Response({
                data: client,
                status_code: 201,
                message: 'Updated complete!'
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
