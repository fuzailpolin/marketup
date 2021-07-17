import PartnershipModel from '../../../tools/db/Model/PartnershipModel'
import connectDB from '../../../tools/db/connection'
import Response from '../../../tools/Response'


/**
 * @method GET
 *
 * @return [TeamModel]
 *
 * */
export default async (req, res) => {
    if(req.method !== 'GET'){
        return res.status(400).send()
    }

    try{
        await connectDB();
        const partners = await PartnershipModel.find({}).sort({'created_at': '-1'})
        res.send(
            Response({
                data: partners
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
