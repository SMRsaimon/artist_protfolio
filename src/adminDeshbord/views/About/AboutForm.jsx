import React from "react";

import Toggle from "react-toggle";
import "react-toggle/style.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'
import Swal from 'sweetalert2';
import SubmitButton from "../SubmitButton/SubmitButton";

const AboutForm = () => {
  const [aboutDetails, setAboutDetails] = useState({});
  const [value, setValue] = useState(false);
  const { register, handleSubmit } = useForm();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = () => {
    console.log(value);
    setValue(!value);
  };

  const onSubmit = (data) => {
    if (data.heading === undefined) {
      setAboutDetails({ paraGraph: data.paraGraph });
    } else {
      setAboutDetails({
        heading: data.heading,
        paraGraph: data.paraGraph,
      });
    }
    axios.post('http://localhost:8000/api/expenses/', aboutDetails)
    .then(res => console.log(res.data));

    Swal.fire(
        'Good job!',
        'Added Successfully',
        'success'
      )
      setTitle('')
      setDescription("")
  };

    




  return (
    <>
      <div className="card p-4">

      <h3 className="text-primary  text-center">About  Myself  </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-1">
            <label className="form-label">
              <Toggle
                defaultChecked={value}
                className="custom-classname"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-3">
            <label
              className={value ? "form-label" : "form-label text-heading"}
              for="exampleFormControlInput1"
            >
              Title
            </label>

            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder={
                value ? " Heading " : "Click Button to Enable this  filed "
              }
              disabled={value ? false : "disabled"}
              {...register("heading", { required: false })}
              onChange={(e)=>setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
            More about myself
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              {...register("paraGraph", { required: true, minLength: 10 })}
              onChange={(e)=>setDescription(e.target.value)}
              value={description}

                required
            ></textarea>
          </div>
         <SubmitButton text="Save" />
        </form>
      </div>
    </>
  );
};

export default AboutForm;
