import JobsModel from '../../../tools/db/Model/JobsModel'
import connectDB from '../../../tools/db/connection'
import Response from '../../../tools/Response'


/**
 * @method GET
 *
 * @return [JobsModel]
 *
 * */
export default async (req, res) => {
    if(req.method !== 'GET'){
        return res.status(400).send()
    }

    try{
        await connectDB();
        const jobs = await JobsModel.find({}).sort({'created_at': '-1'})
        res.send(
            Response({
                status_code: 200,
                data: jobs
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
