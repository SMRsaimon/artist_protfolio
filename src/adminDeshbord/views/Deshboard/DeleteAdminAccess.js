import axios from "axios";

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useContext } from "react";

import { loadingContext } from "./Dashboard";
import Swal from "sweetalert2";

const DeleteAdminAccess = () => {
  const [adminEmail, setAdminEmail] = useState([]);
  const { adminReload } = useContext(loadingContext);
  const [deleteAdmin, setDeleteAdmin] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/adminPanel/api/admin/email", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((result) => {
        setAdminEmail(result.data);
      })
      .catch((err) => {
        
      });
  }, [deleteAdmin, adminReload]);

  //   Remove admin form admin role
  const handelAdminRemove = (id) => {
    if (adminEmail.length > 1) {
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
            .delete(`http://localhost:5000/adminPanel/api/admin/delete/${id}`, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then((result) => {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              setDeleteAdmin(!deleteAdmin);
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
    } else {
      Swal.fire({
        title: "Minimum One Admin access is required",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    }
  };

  return (
    <div>
      <h4 className="text-center brand-text my-2">Admin Email</h4>
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
