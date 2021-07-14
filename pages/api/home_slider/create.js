import FormDataParser from '../../../tools/FormDataParser'
import upload from '../../../tools/cloudinary/upload'
import HomeSliderModel from '../../../tools/db/Model/HomeSlider'
import connectDB from '../../../tools/db/connection'
import Response from '../../../tools/Response'

// import validators
import createHomeSliderValidator from '../../../tools/validators/homeSlider/createHomeSliderValidator'


export const config = {
    api: {
        bodyParser: false
    }
}


/**
 * @method POST
 *
 * @requires FromData

 * @param image File image/png, image/jpg, image/jpeg, image/gif
 *
 * @return HomeSliderModel
 *
 * */
export default async (req, res) => {
    const { method } = req;

    if(method != 'POST'){
        return res.status(404).send()
    }

    try{

        const {files} = await FormDataParser(req)
        // const create = true;
        const errors = createHomeSliderValidator({files, create:true});

        if(errors){
            return res.status(422).send(Response({
                status_code: 422,
                errors,
                message: 'Invalid input!'
            }))
        }
        await connectDB();
        const { public_id } =await upload(files.image, 'home_slider')

        // save data to db
        const slide = await HomeSliderModel.create({
            image: public_id
        })

        // return to client
        return res.status(201).send(
            Response({
                data: slide,
                message: 'New slide added!',
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
