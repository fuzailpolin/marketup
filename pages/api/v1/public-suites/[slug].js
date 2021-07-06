import dbConnect from '../../../../helpers/database/connection'
import Suite from '../../../../models/v1/suite';
import apiResponse from '../../../../helpers/apiResponse'


const controller = async (req,res,next) => {
    const { method }  = req;
    await dbConnect();

    const { slug } = req.query;

    if( slug === null || slug === undefined) {
        return apiResponse.error(res,null, 404,"Slug not found!") 
    }
    
    switch (method) {
        case 'GET':
            try {

                const suite = await Suite.findOne({ slug , deletedAt: null } );
                
                if( suite === null || suite === undefined || suite.length == 0){
                    return apiResponse.error(res,null, 404, "Suite not found with specific slug") 
                }

                let ob = {
                    status_code : 200,
                    message: "Suite found successfully",
                    data: suite
                }

                return apiResponse.success(res,ob) 

            } catch (error) {
                return apiResponse.error(res,error) 
            }
            break;

        default:
            return apiResponse.error(res,null, 401, "Bad request 😡") 
            break;
    }
    

        
}

export default controller;

