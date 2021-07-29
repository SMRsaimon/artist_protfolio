import axios from "axios";
import { Toast } from "./Notification";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useContext } from "react";

import { loadingContext } from "./Dashboard";

const DeleteAdminAccess = () => {
  const [adminEmail, setAdminEmail] = useState([]);
  const {adminReload}=useContext(loadingContext)
  const [deleteAdmin,setDeleteAdmin]=useState(false)

  useEffect(() => {
    axios
      .get("http://localhost:5000/adminPanel/api/admin/email", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((result) => {
        setAdminEmail(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [deleteAdmin,adminReload]);

  //   Remove admin form admin role
  const handelAdminRemove = (id) => {
    axios
      .delete(`http://localhost:5000/adminPanel/api/admin/delete/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((result) => {
        Toast.fire({
          icon: "success",
          title: "Admin Remove  successfully",
          
        });
        setDeleteAdmin(!deleteAdmin)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h4 className="text-center text-primary my-2">Admin Email</h4>
      <ol className="list-group list-group-numbered">
        {adminEmail.length > 0 &&
          adminEmail.map((x) => {
            return (
              <li
                key={x.id}
                className="list-group-item d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className=""> {x.email}</div>
                </div>
                <span
                  onClick={() => handelAdminRemove(x.id)}
                  className="badge deleteIcon"
                >
                  <RiDeleteBin6Line />
                </span>
              </li>
            );
          })}
      </ol>
    </div>
  );
};

export default DeleteAdminAccess;
