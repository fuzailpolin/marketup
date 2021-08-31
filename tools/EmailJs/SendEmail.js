import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const SERVICE_ID = process.env.SERVICE_ID;
const USER_ID = process.env.USER_ID;
const TEMPLATE_ID = process.env.TEMPLATE_ID;
 
const SendEmail = (data) => {
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, data, USER_ID)
      .then((result) => {
          console.log(result.text);
          toast.success('Thank you for reaching out! We will contact you soon.');
      }, (error) => {
          console.log(error.text);
          toast.error('Something went wrong! Please try again later');
      }, (error) => {
          console.log(error.text);
      });
}

export default SendEmail;
