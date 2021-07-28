import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
const CreateAdminAccount = () => {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {

     const date= new Date()
     data.date=date

    axios
    .post("http://localhost:3001/admin/api/createAdmin", data)
    .then((res) =>{
      setEmail("")
      setPassword("")

      console.log(res.data)
    });
  }

  return (
    <div>
      <h4 className="text-center text-primary my-4">Creating Admin Account</h4>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="mb-3 row">
            <label for="inputEmail" className="col-md-4 col-form-label d-block">
              Email
            </label>
            <div className="col-md-8 d-block">
              <input
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
                type="email"
                class="form-control"
                id="inputEmail"
                name="email"
                {...register("email", { required: true })}
                required
              />
            </div>
          </div>

          <div class="mb-3 row">
            <label for="inputPassword" className="col-md-4  col-form-label d-block">
              Password
            </label>
            <div className="col-md-8 d-block">
              <input
               onChange={(e)=>setPassword(e.target.value)}
               value={password}
                type="password"
                class="form-control"
                id="inputPassword"
                name="password"
                required
                {...register("password", { required: true })}
              />
            </div>
          </div>
          <div class="mb-3 row">

            <button className="btn btn-outline-success" type="submit">Create </button>
          
       
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAdminAccount;
