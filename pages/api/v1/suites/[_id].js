import dbConnect from '../../../../helpers/database/connection'
import Suite from '../../../../models/v1/suite';
import apiResponse from '../../../../helpers/apiResponse'
import Validator  from 'validatorjs'


const controller = async (req,res,next) => {
    const { method }  = req;
    await dbConnect();

    const { _id } = req.query;

    if( _id === null || _id === undefined) {
        return apiResponse.error(res,null, 404,"Id not found!") 
    }
    
    switch (method) {
        case 'GET':
            try {

                const suite = await Suite.findById(_id );
                
                let ob = {
                    status_code : 200,
                    message: "Suite found successfully",
                    data: suite
                }
    
                return apiResponse.success(res,ob) 
    
            } catch (error) {
                res.status(401).json({error});
            }
            break;

        case 'PUT':
            try {
                let rules = {
                    title: "string",
                    adult: "numeric",
                    child: "numeric",
                    fare:  "numeric",
                    visible: "boolean"
                } 
                let validation = new Validator(req.body, rules ); 
            
                if(validation.fails()){
                    return apiResponse.error(res, validation.errors.all(), 401, "Validation Error");   
                }

                const suite = await Suite.findByIdAndUpdate(_id, {
                    $set: req.body
                }, { new : true });
                
                let ob = {
                    status_code : 200,
                    message: "Suite updated successfully",
                    data: suite
                }
                
                return apiResponse.success(res,ob) 
    
            } catch (error) {
                res.status(401).json({error});
            }
            break;
        
        case 'DELETE':
            try {
                let suite = await Suite.findById(_id);

                suite.deletedAt = new Date();
                await suite.save();
                
                let ob = {
                    status_code : 200,
                    message: "Suite deleted successfully",
                    data: suite
                }
                
                return apiResponse.success(res,ob) 
    
            } catch (error) {
                res.status(401).json({error});
            }
            break;
        
        default:
            res.status(200).json({ message: 'Bad request 😡' })
            break;
    }
    

        
}

export default controller;

