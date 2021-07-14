import connectDB from '../../../../tools/db/connection'
import ContactModel from '../../../../tools/db/Model/ContactModel'
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
        const {query: {id: messageId}} = req;

        // object id validation
        if (!mongoose.Types.ObjectId.isValid(messageId)) {
            return res.status(404).send()
        }
        await connectDB();

        const contact = await ContactModel.findById(messageId)
        // db existence validation
        if (!contact) {
            return res.status(404).send()
        }



        // delete from db
        await contact.delete()



        return res.status(201).send(
            Response({
                status_code: 200,
                message: 'Contact Detail Removed!'
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
