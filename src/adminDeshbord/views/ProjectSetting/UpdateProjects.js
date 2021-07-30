import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

const UpdateProjects = ({ imgData }) => {
  // image update heandelar
  const hendelImagesUpdate = async (id) => {
    let formData = new FormData();

    // input images by popup
    const { value: file } = await Swal.fire({
      title: "Select image",
      input: "file",
      inputAttributes: {
        accept: "image/*",
        "aria-label": "Upload your profile picture",
      },
    });

    if (file?.size > 1000000) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "File Size too large ",
        footer: "<p> Maximum File Size Allow 1MB</p>",
      });
    } else {
      formData.append("image", file);
      formData.append("id", id);
      axios
        .patch("http://localhost:5000/projects/data/update", formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          if (response.data) {
            if (file) {
                const reader = new FileReader()
                reader.onload = (e) => {
                  Swal.fire({
                    title: 'Your uploaded picture',
                    imageUrl: e.target.result,
                    imageAlt: 'The uploaded picture'
                  })
                }
                reader.readAsDataURL(file)
              }
          }
        })
        .catch((err) => console.log(err));
    }

      
  };

  //    images delete hendelar
  const hendelImagesDelete = (id) => {};
  return (
    <div className="col-md-3">
      <div className="card shadow-lg p-4 mb-3 admin-project-images-container">
        <img src={imgData?.img} alt="" />
        <button
          onClick={() => hendelImagesUpdate(imgData.id)}
          className="btn btn-outline-success mb-2 mt-1"
        >
          Update
        </button>
        <button
          onClick={() => hendelImagesDelete(imgData.id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UpdateProjects;
