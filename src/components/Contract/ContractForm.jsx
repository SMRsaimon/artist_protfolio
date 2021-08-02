import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Toast } from "../../adminDeshbord/views/Deshboard/Notification";
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";
import Swal from "sweetalert2";
const ContractForm = () => {
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("red");
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [message,setMessage]=useState("")
  const { register, handleSubmit } = useForm();
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    color:red;
  `;
 
  const onSubmit = (data) => {
    (data)
    setLoading(true)
    axios
      .post("http://localhost:5000/sendEmail/emailsend/data/post", data)
      .then((result) => {
        setLoading(false)
        Toast.fire({
          icon: "success",
          title: "SuccessFully send your Message",
        });
        setName("")
        setEmail("")
        setPhone("")
        setMessage("")
      })
      .catch((err) => {
        setLoading(false)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: `<p  href="">Please try again!!!!</p>`
        })
        setName("")
        setEmail("")
        setPhone("")
        setMessage("")
      });
  };

  return (
    <div className="contact_form_container pb-5">
      <div className="contact_form_title pt-3">Get in Touch</div>
      <form action="#" onSubmit={handleSubmit(onSubmit)} id="contact_form">
        <div className="contact_form_inputs d-flex flex-md-row flex-column justify-content-between align-items-between">
          <input
         
            type="text"
            id="contact_form_name"
            className="contact_form_name input_field"
            placeholder="Your Name"
            {...register("name", { required: true, maxLength: 80 })}
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />

          <input
            type="text"
            id="contact_form_email"
            className="contact_form_email input_field"
            placeholder="Your Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="tel"
            id="contact_form_phone"
            className="contact_form_phone input_field"
            placeholder="Your Mobile number"
            {...register("number", { maxLength: 12 })}
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
          />
        </div>
        <div className="contact_form_text">
          <textarea
            id="contact_form_message"
            className="text_field contact_form_message"
            rows="4"
            placeholder="Message"
            {...register("message", { required: true })}
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="contact_form_button">
          <button
           
            type="submit"
            className="button contact_submit_button"
          >
            Send Message
          </button>

          <BeatLoader
            color={color}
            loading={loading}
            css={override}
            size={50}
          />
        </div>
      </form>
    </div>
  );
};

export default ContractForm;
