import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { BsCloudUpload } from 'react-icons/bs';

const ProjectImage = () => {

    const [images,setImages]=useState([])
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const hendelImageUploaded=(e)=>{
       
        setImages([...images, ...e.target.files] )

    }

    console.log(images)
      const onSubmit = (data) => {};
    return (
        <div className="card p-4">
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
                <div className="mb-3 weight-UPimg">
         
         <h6>Select photo/photos</h6>

         <input
         style={{display:"none"}}
           onChange={hendelImageUploaded}
           name="image"
           id="file"
           type="file"
           accept="image/*"
           multiple
         />

         <label htmlFor="file">
           <BsCloudUpload /> Upload Photo
         </label>
         
       </div>
              </form>
            </div>
    );
};

export default ProjectImage;