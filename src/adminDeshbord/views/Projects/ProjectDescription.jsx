import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ProjectDescription = () => {
  const [imgFolder, setImgFolder] = useState(true);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   hendel file selected or not
  const hendelFolder = (e) => {
    if (e.target.value !== "false") {
      setImgFolder(true);
    }
  };

  // hendel form data
  const onSubmit = (data) => {
    if (data.descriptionFolder !== "false") {
      data.title = title;
      setImgFolder(true);

      data.id = Date.now();
      axios
        .post("http://localhost:5000/projects/details/data/insert", data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          setDescription("");
          setTitle("");
          Swal.fire("Good job!", "Added Successfully", "success");
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: `<p  href="">Please try again!!!!</p>`
          })
        });
    } else {
      setImgFolder(false);
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
            {...register("descriptionFolder", { required: true })}
            aria-label="Default select example"
            onChange={hendelFolder}
            required
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
          <label className="form-label" for="exampleFormControlInput1">
            Title <small className="text-primary">(optional)</small>
          </label>

          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Title"
            {...register("title", { required: false })}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            About Project Details
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            {...register("description", { required: true, minLength: 10 })}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          ></textarea>
        </div>
        <button className="btn btn-outline-primary" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default ProjectDescription;
