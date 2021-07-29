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
    if (e.target.files) {
      setSelect(false);
      if (e.target.files[0].size > 1000000) {
        setImages([])

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "File Size too large ",
          footer:
            "<p> Maximum File Size Allow 1MB</p>",
        });

      }else{

        setImages(e.target.files);
      }
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
        formData.append("image", images[0]);
        formData.append("imgFolder", data.imgFolder);
        formData.append("vertical", data.vertical);
        formData.append("squire", data.squire);
        axios
          .post("http://localhost:5000/projects/data/insert", formData)
          .then((response) => {
            if (response.data) {
              setImages([]);
              Swal.fire("Good job!", "Added Successfully", "success");
              console.log(response.data);
            }
          })
          .catch((err) => {
            setImages([]);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              footer:
                "<p> Please check your Image size and Image type and try again</p>",
            });
          });
      }
    } else {
      setSelect(true);
    }
  };
  return (
    <div className="card p-4">
      <form onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data">
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
            <option value="storiesFromTheSea">Stories From The Sea</option>
            <option value="theNameOfCity">The Name Of City</option>
            <option value="Joldash">Joldash</option>
            <option value="SonaliBag">SonaliBag</option>
            <option value="countingTheDays">Counting The Days</option>
            <option value="portfolio">Portfolio</option>
            <option value="print">Print</option>
          </select>
        </div>
        <div className="mb-3">
          <p>Images Size <small className="text-primary">(optional)</small></p>
          <div className="pb-3">
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
          <div>
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault2"
            {...register("squire", { required: false })}
          />
          {"  "}
          <label class="form-check-label" for="flexCheckDefault2">
            Squire
          </label>

          </div>
         
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
            multiple={false}
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
