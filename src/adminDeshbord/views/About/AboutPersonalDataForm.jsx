import React from "react";
import "./About.css";
import { BsCloudUpload } from "react-icons/bs";

import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import SubmitButton from "../SubmitButton/SubmitButton";

const AboutPersonalDataForm = () => {
  const [aboutDetails, setAboutDetails] = useState({});
  const [value, setValue] = useState(false);

  const [profileImg,setProfileImg]=useState({})
  const [img, setImg ]=useState({})
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


// handel Profile image
  const hendelImageUploaded = (e) => {

    const img=e.target.files[0]
    const imageData = new FormData();
    imageData.append("profileImg",img )
    setProfileImg(imageData)
    setImg(e.target.files[0])

    
    
  };
 
  const onSubmit = (data) => {

    data.profileImg=profileImg
    

    axios
      .post("http://localhost:8000/api/expenses/", data)
      .then((res) => console.log(res.data));

    Swal.fire("Good job!", "Added Successfully", "success");
    setTitle("");
    setDescription("");
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
            {...register("name", { required: true })}
            required
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
            {...register("email", { required: true })}
            required
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
            {...register("PhoneNumber", { required: true })}
            required
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
            {...register("WhatsAppNumber", { required: true })}
            required
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
              required: true,
            })}
            required
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
              required: true,
            })}
            required
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
              required: true,
            })}
            required
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
              required: true,
            })}
            required
          />
        </div>
        <div className="mb-3 weight-UPimg">
         
          <h6>Choose a Profile  photo</h6>

          <input
          style={{display:"none"}}
            onChange={hendelImageUploaded}
            name="image"
            id="file"
            type="file"
            accept="image/*"
            multiple={false}
          />

          <label htmlFor="file">
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
