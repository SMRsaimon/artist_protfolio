import axios from "axios";
import React from "react";
import { useState } from "react";
import {Toast} from "./Notification"

const CreateAdminAccount = () => {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error, setError]=useState(false)

 
const hendelFromSubmit=(e)=>{
   
   e.preventDefault()
   const date= new Date()
   const data={email,password, date}

   axios
    .post("http://localhost:5000/admin/api/createAdmin", data)
    .then((res) =>{
      setError(false)
      setEmail("")
      setPassword("")
      Toast.fire({
        icon: 'success',
        title: 'Admin create  successfully'
      })
      
    }).catch(err=>{
      setError(true)
      console.log(err)
    })


}


  return (
    <div>
      <h4 className="text-center text-primary my-4">Creating Admin Account</h4>

        {
          error && <p className="text-center text-danger">Fail to create admin try again </p>
        }

      <div>
        <form  onSubmit={hendelFromSubmit}>
          <div class="mb-3 row">
            <label for="inputEmail" className="col-md-4 col-form-label d-block">
              Email
            </label>
            <div className="col-md-8 d-block">
              <input
                 onChange={(e)=>setEmail(e.target.value)}
                value={email}
                type="email"
                className="form-control"
                id="inputEmail"
                name="email"
              
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
                className="form-control"
                id="inputPassword"
                name="password"
                required
               
              />
            </div>
          </div>
          <div class="mb-3 row">

            <button  className="btn btn-outline-success" type="submit">Create </button>
          
       
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAdminAccount;
