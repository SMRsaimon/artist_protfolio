import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

const UpdateProjectDetails = ({ projectDetails, setImgReload }) => {
  const hendelDetailsUpdate = () => {};

  const hendelDetailsDelete = () => {};


  console.log(projectDetails)

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
                  <div className=""> {x?.description?.slice(0,70)}...</div>
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
    <hr/>
    </>
  );
};

export default UpdateProjectDetails;
