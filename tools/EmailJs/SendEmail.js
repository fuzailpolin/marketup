import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const SERVICE_ID = "service_k3pgio8";
const USER_ID = "user_15jzPJAajCLl0FxXufu7P";
const TEMPLATE_ID = "template_0dtni89";

const SendEmail = (data) => {
  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
    (result) => {
      console.log(result.text);
      toast.success("Thank you for reaching out! We will contact you soon.");
    },
    (error) => {
      toast.error("Something went wrong! Please try again later");
    },
    (error) => {
      console.log(error.text);
    }
  );
};

export default SendEmail;
