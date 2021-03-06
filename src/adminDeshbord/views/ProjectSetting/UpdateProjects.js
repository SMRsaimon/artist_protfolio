import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

const UpdateProjects = ({ projectImg, setImgReload }) => {
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
        .patch("http://localhost:5000/projects/data/img/update", formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          if (response.data) {
            const reader = new FileReader();
            reader.onload = (e) => {
              Swal.fire({
                title: "Your uploaded picture",
                imageUrl: e.target.result,
                imageAlt: "The uploaded picture",
              });
            };
            reader.readAsDataURL(file);

            setImgReload((imgReload) => !imgReload);
          }
        })
        .catch((err) => {

          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Uploaded failed",
            footer: "<p> Server error Try again later!!</p>",
          });
        });
    }
  };

  //    images delete hendelar
  const hendelImagesDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/projects/data/img/delete/${id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((result) => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            setImgReload((imgReload) => !imgReload);
          })
          .catch((err) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: `<p  href="">Please try again!!!!</p>`
            })
          });
      }
    });
  };
  return (
    <>
    {
       projectImg.length>0 && projectImg.map(imgData=>
       <>
       <div className="col-xl-2 col-lg-3  col-md-4 col-6 ">
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
       
       </>
       )
      
    }
    </>
  );
};

export default UpdateProjects;


