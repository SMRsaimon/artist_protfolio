import React from "react";

const CreateAdminAccount = () => {
  return (
    <div>
      <h4 className="text-center text-primary my-4">Creating Admin Account</h4>

      <div>
        <form>
          <div class="mb-3 row">
            <label for="inputEmail" className="col-md-4 col-form-label d-block">
              Email
            </label>
            <div className="col-md-8 d-block">
              <input
                type="email"
                class="form-control"
                id="inputEmail"
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
                type="password"
                class="form-control"
                id="inputPassword"
                required
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
