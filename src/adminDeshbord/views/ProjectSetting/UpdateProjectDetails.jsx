import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";
import { Toast } from "../Deshboard/Notification";

const UpdateProjectDetails = ({ projectDetails, setDetailsReload }) => {
  const hendelDetailsUpdate = async (id) => {
    const { value: text } = await Swal.fire({
      input: "textarea",
      inputLabel: "Description",
      inputPlaceholder: "Type  Projects description",
      inputAttributes: {
        "aria-label": "Type  Projects description",
      },
      showCancelButton: true,
    });

    if (text) {
      
      axios
        .patch(
          `http://localhost:5000/projects/details/description/update/${id}`,{text},
          
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
        .catch((err) => console.log(err));
    }
  };

  const hendelDetailsDelete = (id) => {

    axios
    .delete(
      `http://localhost:5000/projects/details/description/delete/${id}`,
      
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
    .catch((err) => console.log(err));




  };

  return (
    <>
      <div className="col-md-10 offset-md-1 p-3">
        <ol className="list-group list-group-numbered">
          {projectDetails.length > 0 &&
            projectDetails.map((x) => {
              return (
                <li
                  key={x.id}
                  className="list-group-item d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className=""> {x?.description?.slice(0, 70)}...</div>
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

export default UpdateProjectDetails;
