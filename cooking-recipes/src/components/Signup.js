import "./signup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useEffect, useState } from "react";
import { postData } from "../service";
import { useNavigate } from "react-router-dom";

export function Signup() {
  let [data, setData] = useState(
    {
      Name: '',
      Email: '',
      MobileNo: '',
      Password: '',
      RePassword:'',
    }
  );
  var navigate = useNavigate()
  let [error, setError] = useState({
    errorName: '',
    errorEmail: '',
    errorMobileNo: '',
    errorPassword: '',
    errorRePassword:'',
  });


  var handleChange = (event) => {
    setData({...data ,[event.target.name]:event.target.value});
  };

  var handleSubmit = async (event) => {   
    event.preventDefault();
    if (validate())
    {
      var responce = await postData(data)
      console.log(responce);
      navigate('/login')
    }
    
   
  };

  var validate = () => { 
    error = {};
     var nameregx = /^[a-zA-Z]{2,30}$/;
    var emailregx = /^\w+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
    var Passwordregx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var MobileNoregx = /\d{10}/;

    if (!data.Name || !(data.Name.match(nameregx)))
    { 
      setError({ errorName: '*invalid name' })
      return false;
    }
    else
    {
      setError({errorName:''})
    }

    if (!data.Email || !emailregx.test(data.Email)) {
      setError({ ...error,errorEmail: '*invalid Email' })
      return false;
    }
    else { 
      setError({...error,errorEmail:''})
    }

    if (!data.MobileNo || !MobileNoregx.test(data.MobileNo)) {
      setError({ ...error,errorMobileNo: '*invalid Mobile No ' })
      return false;
    }
    else { 
      setError({...error,errorMobileNo:''})
    }

    if (!data.Password || !Passwordregx.test(data.Password)) {
      setError({ ...error,errorPassword: '*invalid password'})
      return false;
    }
    else { 
      setError({...error,errorPassword:''})
    }

    if (!data.RePassword || !(data.Password === data.RePassword)) {
      setError({ ...error, errorRePassword: '*doesn\'t match'})
      return false;
    }
    else { 
      setError({ ...error, errorRePassword: '' })
      return true;
    }

  }

 

  return (
    <div className="container-fluid row top">
      <div className="col-7 p-0">
        <img
          src="image/signup.webp"
          alt="Image"
          className="img-fluid image-1"
        />
      </div>
      <div className="col-5">
        <img src="image/logo.png" alt="Logo" className="image-2" />
        <div>
          <form onSubmit={handleSubmit}>
            <div className="row my-4">
              <label
                htmlFor="name"
                className="col-4 d-flex justify-content-end font"
              >
                First Name :
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="col-5"
                name="Name"
                onChange={handleChange}
              />
              <div className="col-3 text-danger">{error.errorName}</div>
            </div>
            <div className="row my-4">
              <label
                htmlFor="Email"
                className="col-4 d-flex justify-content-end font"
              >
                Email-Id :
              </label>
              <input
                type="email"
                placeholder="Enter Your Email-Id"
                onChange={handleChange}
                name="Email"
                className="col-5"
              />
              <div className="col-3 text-danger">{error.errorEmail}</div>
            </div>
            <div className="row my-4">
              <label
                htmlFor="DOB"
                className="col-4 d-flex justify-content-end font"
              >
                Date of Birth :
              </label>
              <input
                type="date"
                min="1970-12-05"
                max="2004-01-01"
                onChange={handleChange}
                className="col-5"
                name="DOB"
              />
            </div>
            <div className="row my-4">
              <label
                htmlFor="mobileno"
                className="col-4 d-flex justify-content-end font"
              >
                Mobile No :
              </label>
              <input
                type="text"
                placeholder="Enter Your Mobile Number"
                onChange={handleChange}
                name="MobileNo"
                className="col-5"
              />
            <div className="col-3 text-danger">{error.errorMobileNo}</div>
            </div>
            <div className="row my-4">
              <label
                htmlFor="pass"
                className="col-4 d-flex justify-content-end font"
              >
                Password :
              </label>
              <input
                type="password"
                name="Password"
                placeholder="Enter Your Password"
                onChange={handleChange}
                className="col-5"
              />
               <div className="col-3 text-danger">{error.errorPassword}</div>
            </div>
            <div className="row my-4">
              <label
                htmlFor="repass"
                className="col-4 d-flex justify-content-end font"
              >
                Re-Enter Password :
              </label>
              <input
                type="password"
                placeholder="Re- Enter Your Password"
                name="RePassword"
                onChange={handleChange}
                className="col-5"
              />
              <div className="col-3 text-danger">{error.errorRePassword}</div>
            </div>
            <div className="my-4">
              <button type="submit" className="btn "> Create Account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
