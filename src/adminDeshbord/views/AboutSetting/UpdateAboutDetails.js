import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";
import { Toast } from "../Deshboard/Notification";

const UpdateAboutDetails = ({ aboutDetails, setDetailsReload }) => {
  const hendelDetailsUpdate = async (id) => {

    const { value: formValues } = await Swal.fire({
      title: "About Details",
      html:
        `<input  placeholder="heading" id="swal-input1" class="swal2-input">` +
        `<textarea   placeholder="Description" id="swal-input2" class="swal2-input">`,
      focusConfirm: false,
      preConfirm: () => {
        return {
          heading: document.getElementById("swal-input1").value,
          bioInformation: document.getElementById("swal-input2").value,
        };
      },
    });
 

 
  

    if (formValues) {
      axios
        .patch(
          `http://localhost:5000/bioInfo/api/bioInformation/update/${id}`,
           formValues ,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((response) => {
          Toast.fire({
            icon: "success",
            title: "Update successfully",
          });
          setDetailsReload((value) => !value);
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
  };

  const hendelDetailsDelete = (id) => {
    axios
      .delete(
        `http://localhost:5000/bioInfo/api/bioInformation/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        Toast.fire({
          icon: "success",
          title: "Delete successfully Done",
        });
        setDetailsReload((value) => !value);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Uploaded failed",
          footer: "<p> Server error Try again later!!</p>",
        });
      });
  };
  return (
    <>
      <div className="col-md-12  p-3">
        <ol className="list-group list-group-numbered">
          {aboutDetails.length > 0 &&
            aboutDetails.map((x) => {
              return (
                <li
                  key={x.id}
                  className="list-group-item d-flex justify-content-between align-items-start mb-2"
                >
                  <div className="ms-2 me-auto ">
                    <div className="">
                      <strong>Description :</strong>{" "}
                      <p> {x?.bioInformation?.slice(0, 70)}...</p>
                      <br />
                      {x?.heading && (
                        <p>
                          {" "}
                          <strong>Heading: </strong> {x.heading}
                        </p>
                      )}
                    </div>
                  </div>

                  <span
                    onClick={() => hendelDetailsUpdate(x.id)}
                    className="badge editIcon"
                  >
                    <FaEdit />
                  </span>
                  <span
                    onClick={() => hendelDetailsDelete(x.id)}
                    className="badge deleteIcon"
                  >
                    <RiDeleteBin6Line />
                  </span>
                </li>
              );
            })}
        </ol>
      </div>
      <hr />
    </>
  );
};

export default UpdateAboutDetails;
