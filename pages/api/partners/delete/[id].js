import connectDB from '../../../../tools/db/connection'
import PartnershipModel from '../../../../tools/db/Model/PartnershipModel'
import mongoose from 'mongoose'
import Response from '../../../../tools/Response'
import deleteImage from '../../../../tools/cloudinary/delete'


export const config = {
    api: {
        bodyParser: false
    }
}


/**
 * @method DELETE
 *
 * @query_params ObjectID
 *
 * @return
 * */
const handler = async (req, res) => {

    if (req.method !== 'DELETE') {
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


        const prevImageId = partner.image
        const prevCompanyLogoId = partner.company_logo


        // delete from db
        await partner.delete()

        // delete image form cloudinary
        await deleteImage(prevImageId);
        await deleteImage(prevCompanyLogoId);


        return res.status(201).send(
            Response({
                status_code: 200,
                message: 'Partner delete successful!!'
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
