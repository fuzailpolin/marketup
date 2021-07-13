import TeamModel from '../../../tools/db/Model/TeamModel'
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
        const teams = await TeamModel.find({})
        res.send(
            Response({
                data: teams
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
