import React from "react";
import "./LogIn.css";
import { FaUserTie } from "react-icons/fa";
import { FaUnlockAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../App";
import axios from "axios";
import { useState } from "react";
import {Toast} from "../views/Deshboard/Notification"


const LogIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const { setLoginUser } = useContext(userContext);

  const [error, setError] = useState(false);

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/admin/login", data)
      .then((result) => {           
        setLoginUser({email:data.email})
        history.replace(from)
       localStorage.setItem("token", result.data.access_token)

        setError(false)
        Toast.fire({
          icon: 'success',
          title: 'Login successful!'
        })
      
        
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 401) {
            setError({ message: "Wrong email/password combination!" });
          }
          if (err.response.status === 404) {
            setError({ message: "Admin  doesn't exist" });
          }
        }
      });
   
  };


 

  return (
    <div className="login-page container mt-5">
      <main>
        <div className="login-block ">
          
          <h3 className="mb-4">Admin LogIn</h3>
          {
            error &&  <p className="text-danger text-center">{error.message} </p>
          }
         
          <form onSubmit={handleSubmit(onSubmit)} action="#">
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <FaUserTie />
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email "
                  name="email"
                  required
                  {...register("email", { required: true })}
                />
              </div>
            </div>

            <hr className="hr-xs" />

            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <FaUnlockAlt />
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  required
                  name="password"
                  {...register("password", { required: true })}
                />
              </div>
            </div>

            <button
              style={{ width: "100%" }}
              className="btn btn-lg-primary btn-block"
              type="submit"
            >
              LogIn
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default LogIn;
