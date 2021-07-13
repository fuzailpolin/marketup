import connectDB from '../../../../tools/db/connection'
import WorksModel from '../../../../tools/db/Model/WorksModel'
import mongoose from 'mongoose'
import FormDataParser from '../../../../tools/FormDataParser'
import WorksUpdateValidator from '../../../../tools/validators/works/workUpdateValidator'
import upload from '../../../../tools/cloudinary/upload'
import Response from '../../../../tools/Response'
import cloudinary from '../../../../tools/cloudinary'

export const config = {
    api: {
        bodyParser: false
    }
}



const handler = async (req, res) => {

    if (req.method !== 'PUT') {
        return res.status(404).send()
    }

    try {
        const {query: {id: workId}} = req;

        // object id validation
        if (!mongoose.Types.ObjectId.isValid(workId)) {
            return res.status(404).send()
        }
        await connectDB();


        const work = await WorksModel.findById(workId)
        // db existence validation
        if (!work) {
            return res.status(404).send()
        }

        // parse the form from FormData
        console.log(work)
        const {files, fields} = await FormDataParser(req);


        const errors = WorksUpdateValidator({files, fields});
        console.log(errors)
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


        work.company = fields.company.trim();
        work.work = fields.work.trim();

        const prevId = work.image

        if (files?.image) {
            const {public_id} = await upload(files.image, 'team');
            work.image = public_id;
        }

        await work.save()

        // delete previous image if new have
        if (files?.image) {
            await cloudinary.v2.uploader.destroy(prevId);
        }

        return res.status(201).send(
            Response({
                data: work,
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
