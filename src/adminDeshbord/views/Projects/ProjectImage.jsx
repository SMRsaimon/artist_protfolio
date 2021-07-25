import axios from "axios";
import React from "react";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsCloudUpload } from "react-icons/bs";
import Swal from "sweetalert2";

const ProjectImage = () => {
  const [images, setImages] = useState([]);
  const [Select, setSelect] = useState(false);

  const [imgFolder, setImgFolder] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const hendelImageUploaded = (e) => {
    setImages([...images, ...e.target.files]);
    if (e.target.files) {
      setSelect(false);
    }
  };

  const hendelFolder = (e) => {
    if (images.length > 0) {
      if (e.target.value !== "false") {
        setImgFolder(true);
      } else {
        setImgFolder(false);
      }
    }
  };

  const onSubmit = (data) => {
    let formData = new FormData();

    if (images.length > 0) {
      setSelect(false);
      if (data.imgFolder === "false") {
        setImgFolder(false);
      } else {
        setImgFolder(true);
        for (const key of Object.keys(images)) {
          formData.append("imagesArray", images[key]);
        }
        formData.append("imgFolder", data.imgFolder);
        formData.append("vertical", data.vertical);

        axios
          .post(
            "http://localhost:8000/endpoint/multi-images-upload",
            formData,
            {}
          )
          .then((response) => {
            setImages([]);
            Swal.fire("Good job!", "Added Successfully", "success");
            console.log(response.data);
          });
      }
    }
    if (images.length === 0) {
      setSelect(true);
    }
  };
  return (
    <div className="card p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          {!imgFolder && (
            <p className="text-danger">Please selected a folder </p>
          )}
          <select
            class="form-select"
            {...register("imgFolder", { required: true })}
            aria-label="Default select example"
            onChange={hendelFolder}
          >
            <option value="false" selected>
              Select Images Folder
            </option>
            <option value="inSearchOf">In Search Of</option>
            <option value="Dhaka">Dhaka</option>
            <option value="theNameOfCity">The Name Of City</option>
            <option value="Joldash">Joldash</option>
            <option value="SonaliBeg">SonaliBeg</option>
            <option value="countingTheDays">Counting The Days</option>
            <option value="portfolio">Portfolio</option>
            <option value="print">Print</option>
          </select>
        </div>
        <div className="mb-3">
          <p>Images Size </p>
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            {...register("vertical", { required: false })}
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
        {Select && (
          <p className="text-danger"> Please Select minimum One image </p>
        )}
        <p style={{ color: "gray" }}>
          {images.length > 0 && images.length + "  " + "Image Selected "}
        </p>
        <button className="btn btn-outline-primary" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default ProjectImage;
