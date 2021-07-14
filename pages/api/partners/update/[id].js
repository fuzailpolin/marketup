import connectDB from '../../../../tools/db/connection'
import PartnershipModel from '../../../../tools/db/Model/PartnershipModel'
import mongoose from 'mongoose'
import FormDataParser from '../../../../tools/FormDataParser'
import upload from '../../../../tools/cloudinary/upload'
import updatePartnerValidator from '../../../../tools/validators/partner/updatePartnerValidator'
import Response from '../../../../tools/Response'
import deleteImage from '../../../../tools/cloudinary/delete'

export const config = {
    api: {
        bodyParser: false
    }
}


/**
 * @method PUT
 *
 * @requires FromData
 *
 * @param name String
 * @param designation String
 * @param text String
 * @param image File image/png, image/jpg, image/jpeg [optional]
 * @param company_logo File image/png, image/jpg, image/jpeg [optional]
 *
 * @return PartnershipModel
 *
 * */
const handler = async (req, res) => {

    if (req.method !== 'PUT') {
        return res.status(404).send()
    }

    try {
        const {query: {id: partnerId}} = req;

        // object id validation
        if (!mongoose.Types.ObjectId.isValid(partnerId)) {
            return res.status(404).send()
        }
        await connectDB();


        const partner = await PartnershipModel.findById(partnerId)
        // db existence validation
        if (!partner) {
            return res.status(404).send()
        }

        // parse the form from FormData
        const {files, fields} = await FormDataParser(req);


        const errors = updatePartnerValidator({files, fields});
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


        partner.name = fields.name.trim();
        partner.designation = fields.designation.trim();
        partner.text = fields.text.trim();

        const prevImageId = partner.image
        const prevCompanyLogoId = partner.company_logo

        if (files?.image) {
            const imageU = await upload(files.image, 'partner');
            partner.image = imageU.public_id;
        }

        if (files?.company_logo) {
            const companyLogo = await upload(files.company_logo, 'partner');
            partner.company_logo = companyLogo.public_id;
        }

        await partner.save()

        // delete previous image if new have
        if (files?.image) {
            await deleteImage(prevImageId);
        }

        // delete previous company logo if new have
        if (files?.company_logo) {
            await deleteImage(prevCompanyLogoId);
        }

        return res.status(201).send(
            Response({
                data: partner,
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
