import FormDataParser from '../../tools/FormDataParser'
import upload from '../../tools/cloudinary/upload'
import TeamModel from '../../tools/db/Model/TeamModel'
import connectDB from '../../tools/db/connection'

export const config = {
    api: {
        bodyParser: false
    }
}

export default async (req, res) => {

    try{
        await connectDB();
        const data = await FormDataParser(req)
        const up = await upload(data.files.f, 'team')
        console.log(typeof up)
        const team = await TeamModel.create({
            name: 'Imran Hossain',
            designation :'CEO',
            image: up.public_id


        })
        res.send(team)
    }catch (e) {
        res.send(e.message)
    }






}
