import React from "react";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsCloudUpload } from "react-icons/bs";

const ProjectImage = () => {
  const [images, setImages] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const hendelImageUploaded = (e) => {
    setImages([...images, ...e.target.files]);
  };

  console.log(images);
  const onSubmit = (data) => {};
  return (
    <div className="card p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <select class="form-select" aria-label="Default select example">
            <option selected>Select Images Folder</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="mb-3">
          <p>Images Size </p>
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          {"  "}
          <label class="form-check-label" for="flexCheckDefault">
            Vertical
          </label>
        </div>
        <div className="mb-3 weight-UPimg">
          <h6>Select photo/photos</h6>

          <input
            style={{ display: "none" }}
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