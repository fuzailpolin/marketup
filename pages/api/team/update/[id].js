import connectDB from '../../../../tools/db/connection'
import TeamModel from '../../../../tools/db/Model/TeamModel'
import mongoose from 'mongoose'
import FormDataParser from '../../../../tools/FormDataParser'
import upload from '../../../../tools/cloudinary/upload'
import updateTeamValidator from '../../../../tools/validators/team/updateTeamValidator'
import Response from '../../../../tools/Response'
import cloudinary from '../../../../tools/cloudinary'

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
 * @param image File image/png, image/jpg, image/jpeg [optional]
 *
 * @return TeamModel
 *
 * */
const handler = async (req, res) => {

    if (req.method !== 'PUT') {
        return res.status(404).send()
    }

    try {
        const {query: {id: teamId}} = req;

        // object id validation
        if (!mongoose.Types.ObjectId.isValid(teamId)) {
            return res.status(404).send()
        }
        await connectDB();


        const team = await TeamModel.findById(teamId)
        // db existence validation
        if (!team) {
            return res.status(404).send()
        }

        // parse the form from FormData
        const {files, fields} = await FormDataParser(req);


        const errors = updateTeamValidator({files, fields});
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


        team.name = fields.name.trim();
        team.designation = fields.designation.trim();

        const prevId = team.image

        if (files?.image) {
            const {public_id} = await upload(files.image, 'team');
            team.image = public_id;
        }

        await team.save()

        // delete previous image if new have
        if (files?.image) {
            await cloudinary.v2.uploader.destroy(prevId);
        }

        return res.status(201).send(
            Response({
                data: team,
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
