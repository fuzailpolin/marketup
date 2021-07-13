import FormDataParser from '../../../tools/FormDataParser'
import upload from '../../../tools/cloudinary/upload'
import TeamModel from '../../../tools/db/Model/TeamModel'
import connectDB from '../../../tools/db/connection'

export const config = {
    api: {
        bodyParser: false
    }
}

export default async (req, res) => {
    const { method } = req;

    if(method != 'POST'){
        return res.send( method + " method is not allowed!")
    }

    try{
        await connectDB();
        const {files, fields} = await FormDataParser(req)
        const c =await upload(files.f, 'team')

        console.log(c)
    }catch (e) {
        res.status(400).send(e.message)
    }






}
