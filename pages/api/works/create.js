import FormDataParser from '../../../tools/FormDataParser'
import upload from '../../../tools/cloudinary/upload'
import WorksModel from '../../../tools/db/Model/WorksModel'
import connectDB from '../../../tools/db/connection'
import Response from '../../../tools/Response'

// import validators
import worksDataValidator from '../../../tools/validators/works/worksDataValidator'

export const config = {
    api: {
        bodyParser: false
    }
}

export default async (req, res) => {
    const { method } = req;

    if(method != 'POST'){
        return res.status(404).send()
    }

    try{
        await connectDB();
        const {files, fields} = await FormDataParser(req)

        const errors = worksDataValidator({files, fields})

        if(errors){
            return res.status(422).send(Response({
                status_code: 422,
                errors,
                message: 'Invalid input!'
            }))
        }

        const { public_id } =await upload(files.image, 'team')

        // save data to db
        const works = await WorksModel.create({
            company: fields.company.trim(),
            work: fields.work.trim(),
            image: public_id
        })

        // return to client
        return res.status(201).send(
            Response({
                data: works,
                message: 'New work added!',
                status_code: 201
            })
        )


    }catch (e) {
        res.status(400).send(Response({
            message: e.message,
            status_code: 400
        }))
    }


}
