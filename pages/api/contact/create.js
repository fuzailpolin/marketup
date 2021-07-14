import FormDataParser from '../../../tools/FormDataParser';
import ContactModel from '../../../tools/db/Model/ContactModel';
import connectDB from '../../../tools/db/connection';
import Response from '../../../tools/Response';

// import validators
import createContactValidator from '../../../tools/validators/contact/createContactValidator'

export const config = {
    api: {
        bodyParser: false
    }
}



/**
 * @method POST
 *
 * @requires FromData
 *
 * @param name String
 * @param subject String [optional]
 * @param phone String
 * @param email String
 * @param message String
 *
 * @return ContactModel
 *
 * */
export default async (req, res) => {
    const { method } = req;

    if(method != 'POST'){
        return res.status(404).send()
    }

    try{

        const {files, fields} = await FormDataParser(req)

        const errors = createContactValidator({files, fields})

        if(errors){
            return res.status(422).send(Response({
                status_code: 422,
                errors,
                message: 'Invalid input!'
            }))
        }

        await connectDB();
        // save data to db
        const contact = await ContactModel.create({
            name: fields?.name?.trim() || '',
            subject: fields?.subject?.trim() || '',
            phone: fields?.phone?.trim() || '' ,
            email: fields?.email?.trim()  || '',
            message: fields?.message?.trim() || ''
        })

        // return to client
        return res.status(201).send(
            Response({
                data: contact,
                message: 'Message Sent Successful!',
                status_code: 201
            })
        )


    }catch (e) {
        res.status(500).send(Response({
            message: 'Message Sent Failed!',
            status_code: 500
        }))
    }


}
