import FormDataParser from '../../../tools/FormDataParser'
import upload from '../../../tools/cloudinary/upload'
import TeamModel from '../../../tools/db/Model/TeamModel'
import connectDB from '../../../tools/db/connection'
import Response from '../../../tools/Response'

// import validators
import createTeamValidator from '../../../tools/validators/team/createTeamValidator'

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
 * @param image File image/png, image/jpg, image/jpeg
 *
 * @return [TeamModel]
 *
 * */
export default async (req, res) => {
    const { method } = req;

    if(method != 'POST'){
        return res.send( method + " method is not allowed!")
    }

    try{
        await connectDB();
        const {files, fields} = await FormDataParser(req)

        const errors = createTeamValidator({files, fields})

        if(errors){
            return res.status(422).send(Response({
                status_code: 422,
                errors,
                message: 'Invalid input!'
            }))
        }

        const { public_id } =await upload(files.image, 'team')

        // save data to db
        const team = await TeamModel.create({
            name: fields.name.trim(),
            designation: fields.designation.trim(),
            image: public_id
        })

        // return to client
        return res.status(201).send(
            Response({
                data: team,
                message: 'New team member added!',
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
