import ContactModel from '../../../tools/db/Model/ContactModel'
import connectDB from '../../../tools/db/connection'
import Response from '../../../tools/Response'


/**
 * @method GET
 *
 * @return [ContactModel]
 *
 * */
export default async (req, res) => {
    if(req.method !== 'GET'){
        return res.status(400).send()
    }

    try{
        await connectDB();
        const contacts = await ContactModel.find({}).sort({'created_at': '-1'})
        res.send(
            Response({
                data: contacts
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
