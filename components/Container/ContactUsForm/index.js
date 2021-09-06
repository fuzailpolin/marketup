import { useState } from "react";
import axiosPost from "../../../frontend/helpers/axiosPost";
import { toast } from "react-toastify";
import SendEmail from "../../../tools/EmailJs/SendEmail";

const ContactUsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axiosPost("/api/contact/create", { name, email, subject, phone, message })
      .then((res) => {
        // toast.success(
        //   `Thank you ${name} for reaching out. We will contact you soon!`
        // );
        SendEmail(e.target);
        resetForm();
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Something went wrong. Plase try again later!");
        setLoading(false);
      });
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className={"mx-3 md:mx-6 lg:mx-14"}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={"grid grid-cols-12"}>
          <div
            className={
              "col-span-12 md:col-span-6 border border-gray-300 md:mr-2 lg:mr-4 my-3 font-poppins"
            }
          >
            <input
              className={"h-full w-full p-3"}
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              type="text"
              placeholder="Name"
              required
            />
          </div>
          <div
            className={
              "col-span-12 md:col-span-6 border border-gray-300 md:ml-2 lg:ml-4 my-3"
            }
          >
            <input
              className={"h-full w-full p-3"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="email"
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div className={"grid grid-cols-12"}>
          <div
            className={
              "col-span-12 md:col-span-6 border border-gray-300 md:mr-2 lg:mr-4 my-3 font-poppins"
            }
          >
            <input
              className={"h-full w-full p-3"}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              name="subject"
              type="text"
              placeholder="Subject"
              required
            />
          </div>
          <div
            className={
              "col-span-12 md:col-span-6 border border-gray-300 md:ml-2 lg:ml-4 my-3 font-poppins"
            }
          >
            <input
              className={"h-full w-full p-3"}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              name="phone"
              type="text"
              placeholder="Phone Number"
              required
            />
          </div>
        </div>
        <div className={"my-3"}>
          <textarea
            className={"h-full w-full p-3"}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            rows="4"
            cols="55"
            placeholder="Message"
            required
          />
        </div>
        <div className={"w-full flex justify-end"}>
          <button
            type="submit"
            disabled={loading}
            className={
              "w-40 h-12 bg-black text-center text-white font-poppins text-lg font-medium rounded-md"
            }
          >
            {loading ? "loading..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
