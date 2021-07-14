import FormDataParser from '../../../tools/FormDataParser'
import upload from '../../../tools/cloudinary/upload'
import PartnershipModel from '../../../tools/db/Model/PartnershipModel'
import connectDB from '../../../tools/db/connection'
import Response from '../../../tools/Response'

// import validators
import createPartnerValidator from '../../../tools/validators/partner/createPartnerValidator'

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
 * @param designation String
 * @param text String
 * @param image File image/png, image/jpg, image/jpeg
 * @param company_logo File image/png, image/jpg, image/jpeg
 *
 * @return [PartnershipModel]
 *
 * */
export default async (req, res) => {
    const { method } = req;

    if(method != 'POST'){
        return res.status(404).send()
    }

    try{
        await connectDB();
        const {files, fields} = await FormDataParser(req)

        const errors = createPartnerValidator({files, fields})

        if(errors){
            return res.status(422).send(Response({
                status_code: 422,
                errors,
                message: 'Invalid input!'
            }))
        }

        const uploadedImage = await upload(files.image, 'partner')
        const companyLogo = await upload(files.company_logo, 'partner')

        // save data to db
        const partner = await PartnershipModel.create({
            name: fields.name.trim(),
            designation: fields.designation.trim(),
            image: uploadedImage.public_id,
            company_logo: companyLogo.public_id,
            text: fields.text.trim()
        })

        // return to client
        return res.status(201).send(
            Response({
                data: partner,
                message: 'New partner added!',
                status_code: 201
            })
        )


    }catch (e) {
        res.status(500).send(Response({
            message: e.message,
            status_code: 500
        }))
    }


}
