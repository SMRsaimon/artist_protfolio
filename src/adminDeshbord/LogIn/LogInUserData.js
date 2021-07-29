import jwt_decode from "jwt-decode";

export  const logInUserData = () => {
    if (localStorage.getItem("token")) {
      const { email } = jwt_decode(localStorage.getItem("token"));
     
      return email;
    }
  };