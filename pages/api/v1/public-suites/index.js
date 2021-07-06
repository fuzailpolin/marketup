import dbConnect from '../../../../helpers/database/connection'
import Suite from '../../../../models/v1/suite';
import apiResponse from '../../../../helpers/apiResponse'
import Validator  from 'validatorjs'

const controller = async (req,res,next) => {
    const { method }  = req;
    await dbConnect();
    
    
    if(method === 'GET') {
        try {
            const suites = await Suite.find({
                deletedAt: null
            });
            
            let ob = {
                status_code : 200,
                message: "Suites found successfully",
                data: suites 
            }

            return apiResponse.success(res,ob) 

        } catch (error) {
            res.status(401).json({error});
        }

    }
    else {
        res.status(200).json({ message: 'Bad request 😡' })

    }
}

export default controller;


// export default async (req, res) => {
//     res.status(200).json({ name: 'Suites' })
//   }