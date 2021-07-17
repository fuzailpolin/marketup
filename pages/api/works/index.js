import WorksModel from '../../../tools/db/Model/WorksModel'
import connectDB from '../../../tools/db/connection'
import Response from '../../../tools/Response'

/**
 * @method GET
 *
 * @return [WorksModel]
 *
 * */
export default async (req, res) => {
    if(req.method !== 'GET'){
        return res.status(400).send()
    }

    try{
        await connectDB();
        const works = await WorksModel.find({}).sort().sort({'created_at': '-1'})
        res.status(200).send(
            Response({
                data: works,
                status_code: 200
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
