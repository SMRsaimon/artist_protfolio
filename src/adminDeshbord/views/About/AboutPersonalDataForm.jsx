import React from "react";
import "./About.css";
import { BsCloudUpload } from "react-icons/bs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import SubmitButton from "../SubmitButton/SubmitButton";

const AboutPersonalDataForm = () => {
  const [img, setImg ]=useState({})
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


const hendelImage=(e)=>{

   const img=e.target.files[0]
   setImg(img)

}
 
  const onSubmit = (data) => {
     let fromData= new FormData()
     fromData.append("profileImg", img)
     fromData.append("name", data.name)
     fromData.append("email", data.email)
     fromData.append("phoneNumber", data.PhoneNumber)
     fromData.append("whatsAppNumber", data.WhatsAppNumber)
     fromData.append("facebook", data.facebook)
     fromData.append("linkedIn", data.linkedIn)
     fromData.append("instagram", data.Instagram)
     fromData.append("resume", data.resume)
   
    
    
   

    axios
      .post("http://localhost:8000/api/expenses/", fromData )
      .then((res) => {

        console.log(res)
        if(res){

          Swal.fire("Good job!", "Added Successfully", "success");
        }
      });
     
    
  };




  return (
    <div className="card p-4 mt-4">
      <h3 className="text-primary  text-center">Personal Information </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label" for="exampleFormControlInput1">
            Name :
          </label>

          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Your Name "
            {...register("name", { required: false })}
            
          />
        </div>
        <div className="mb-3">
          <label className="form-label" for="exampleFormControlInput2">
            Email :
          </label>

          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="Your Email  "
            {...register("email", { required: false })}
            
          />
        </div>
        <div className="mb-3">
          <label className="form-label" for="exampleFormControlInput3">
            Phone Number :
          </label>

          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput3"
            placeholder="Your Phone Number "
            {...register("PhoneNumber", { required: false })}
            
          />
        </div>
        <div className="mb-3">
          <label className="form-label" for="exampleFormControlInput4">
            Whats App Number:
          </label>

          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput4"
            placeholder="Your Whats App Number "
            {...register("WhatsAppNumber", { required: false })}
            
          />
        </div>
        <div className="mb-3">
          <label className="form-label" for="exampleFormControlInput5">
            Facebook Link :
          </label>

          <input
            type="url"
            className="form-control"
            id="exampleFormControlInput5"
            placeholder="Put your facebook link "
            {...register("facebook", {
              required: false,
            })}
            
          />
          {errors.facebook && (
            <span className="text-danger">Enter valide URl</span>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label" for="exampleFormControlInput6">
            LinkedIn Link :
          </label>

          <input
            type="url"
            className="form-control"
            id="exampleFormControlInput6"
            placeholder="Put your linkedIn link "
            {...register("linkedIn", {
              required: false,
            })}
            
          />
        </div>
        <div className="mb-3">
          <label className="form-label" for="exampleFormControlInput6">
            Instagram Link :
          </label>

          <input
            type="url"
            className="form-control"
            id="exampleFormControlInput6"
            placeholder="Put your Instagram link "
            {...register("Instagram", {
              required: false,
            })}
            
          />
        </div>
        <div className="mb-3">
          <label className="form-label" for="exampleFormControlInput7">
            Resume Google Drive Link :
          </label>

          <input
            type="url"
            className="form-control"
            id="exampleFormControlInput7"
            placeholder="resume  link "
            {...register("resume", {
              required: false,
            })}
            
          />
        </div>
        <div className="mb-3 weight-UPimg">
         
          <h6>Choose a Profile  photo</h6>

          <input

          onChange={hendelImage}
          style={{display:"none"}}
            
            name="image"
            id="file"
            type="file"
            accept="image/*"
            multiple={false}
        
          />

          <label  htmlFor="file">
            <BsCloudUpload /> {img?.name? "Image selected":"Upload Photo"} 
          </label>
          <h6>{img?.name}</h6>
        </div>

        <SubmitButton text="Save" />
      </form>


     
    </div>
  );
};

export default AboutPersonalDataForm;
