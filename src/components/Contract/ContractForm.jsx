import React from "react";
import { useForm } from "react-hook-form";

const ContractForm = () => {
     const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);



  return (
    <div className="contact_form_container pb-5">
      <div className="contact_form_title pt-3">Get in Touch</div>
      <form action="#" onSubmit={handleSubmit(onSubmit)} id="contact_form">
        <div className="contact_form_inputs d-flex flex-md-row flex-column justify-content-between align-items-between">
          <input
            type="text"
            id="contact_form_name"
            className="contact_form_name input_field"
            placeholder="Your Name" {...register("name", {required: true, maxLength: 80})} 
          />

          <input
            type="text"
            id="contact_form_email"
            className="contact_form_email input_field"
            placeholder="Your Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})}
          />
           

          <input
            type="tel"
            id="contact_form_phone"
            className="contact_form_phone input_field"
            placeholder="Your Mobile number" {...register("number", { maxLength: 12})}
          />
        </div>
        <div className="contact_form_text">
          <textarea
            id="contact_form_message"
            className="text_field contact_form_message"
           
            rows="4"
            placeholder="Message"
            {...register("message", {required: true})} 
          ></textarea>
        </div>
        <div className="contact_form_button">
          <button type="submit" className="button contact_submit_button">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContractForm;
