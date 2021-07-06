import dbConnect from '../../../../helpers/database/connection'
import Reservation from '../../../../models/v1/reservation';
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
                const reservation = await Reservation.findById(_id );

                let ob = {
                    status_code : 200,
                    message: "Reservation found successfully",
                    data: reservation
                }
    
                return apiResponse.success(res,ob) 
    
            } catch (error) {
                res.status(401).json({error});
            }
            break;

        case 'PUT':
            try {
                let rules = {
                    customerName:   "string",
                    customerEmail:  "email",
                    customerPhone:  "string",
                    suite:          "string",
                    suiteTitle:     "string",
                    checkin:        "date",
                    checkout:       "date",
                    adult:          "numeric",
                    child:          "numeric",
                    fare:           "numeric",
                } 
                let validation = new Validator(req.body, rules ); 
            
                if(validation.fails()){
                    return apiResponse.error(res, validation.errors.all(), 401, "Validation Error");   
                }

                const reservation = await Reservation.findByIdAndUpdate(_id, {
                    $set: req.body
                }, { new : true });
                
                let ob = {
                    status_code : 200,
                    message: "Reservation updated successfully",
                    data: reservation
                }
                
                return apiResponse.success(res,ob) 
    
            } catch (error) {
                res.status(401).json({error});
            }
            break;
        
        case 'DELETE':
            try {
                let reservation = await Reservation.findById(_id);

                reservation.deletedAt = new Date();
                await reservation.save();
                
                let ob = {
                    status_code : 200,
                    message: "Reservation deleted successfully",
                    data: reservation
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

