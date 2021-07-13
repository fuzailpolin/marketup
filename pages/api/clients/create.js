import FormDataParser from '../../../tools/FormDataParser'
import upload from '../../../tools/cloudinary/upload'
import ClientModel from '../../../tools/db/Model/ClientsModel'
import connectDB from '../../../tools/db/connection'
import Response from '../../../tools/Response'

// import validators
import clientDataValidator from '../../../tools/validators/clients/clientDataValidator'


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
        // const create = true;
        const errors = clientDataValidator({files, create:true});

        if(errors){
            return res.status(422).send(Response({
                status_code: 422,
                errors,
                message: 'Invalid input!'
            }))
        }

        const { public_id } =await upload(files.image, 'team')

        // save data to db
        const clients = await ClientModel.create({
            image: public_id
        })

        // return to client
        return res.status(201).send(
            Response({
                data: clients,
                message: 'New client logo added!',
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
