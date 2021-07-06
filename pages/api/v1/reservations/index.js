import dbConnect from '../../../../helpers/database/connection'
import Reservation from '../../../../models/v1/reservation';
import apiResponse from '../../../../helpers/apiResponse'
import Validator  from 'validatorjs'
import { customAlphabet } from 'nanoid';
import moment from 'moment'

const controller = async (req,res,next) => {
    const { method }  = req;
    await dbConnect();
    const nanoid = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ', 10)
    

    switch (method) {
        case 'GET':
            try {
                const reservations = await Reservation.find()
                                    .sort({ createdAt: 'desc' })
                                    .populate("suite");

                if( reservations === null || reservations === undefined || reservations?.length == 0) {
                    return apiResponse.error(res,null, 404, "No reservation found!"); 
                }

                let ob = {
                    status_code : 200,
                    message: "Reservations found successfully",
                    data: reservations 
                }

                return apiResponse.success(res,ob) 
    
            } catch (error) {
                return apiResponse.error(res,error) 
            }
            break;

        case 'POST':
            try {
                let rules = {
                    customerName: "required|string",
                    customerEmail: "email",
                    customerPhone: "required|string",
                    suite: "required|string",
                    suiteTitle: "required|string",
                    checkin: "required|date",
                    checkout: "required|date",
                    adult: "required|numeric",
                    child: "required|numeric",
                    fare:  "required|numeric",
                } 
                let validation = new Validator(req.body, rules ); 
            
                if(validation.fails()){
                    return apiResponse.error(res, validation.errors.all(), 401, "Validation Error");   
                }

                let { customerName, customerEmail, customerPhone,
                     suite, suiteTitle, checkin, checkout, adult, child, discount, coupon,
                     fare } = req.body;

                let totalNight =  moment(checkout).diff(moment(checkin)) / ( 1000 * 60 * 60 * 24);
                var subTotal = fare * totalNight;
                
                discount = discount === undefined || discount === null || isNaN(discount) ? 0 : discount;
                var total = subTotal - discount; 


                // TODO check availability on calender before create 

                // console.log(totalNight);
                // console.log(
                //     nanoid(),
                //     customerName, customerEmail, customerPhone,
                //     suite, suiteTitle,
                //     checkin, checkout,
                //     adult, child,
                //     fare, subTotal, discount, total, 
                //     coupon
                //  );

    
                const reservation = await Reservation.create({
                    reservationNo: nanoid(),
                    customerName, customerEmail, customerPhone,
                    suite, suiteTitle,
                    checkin, checkout,
                    adult, child,
                    fare, subTotal, discount, total, 
                    coupon
                });

                
                let ob = {
                    status_code : 201,
                    message: "Reservation create successfully",
                    data: reservation
                }
                
                return apiResponse.success(res,ob) 
    
            } catch (error) {
                return apiResponse.error(res,error, 401, "Unsuccessful attempt of reservation!") ;
            }
            break;
    
        default:
            return apiResponse.error(res,null, 404, "Bad request 😡"); 
            break;
    }

}

export default controller;