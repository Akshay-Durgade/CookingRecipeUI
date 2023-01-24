import "./signup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import { getData } from "../service";

export function Login() {
  var navigate = useNavigate();
  // var errorEmail = '';
  // var errorPassword = '';
  
  var [errorEmail, setEmail] = useState('');
  var [errorPassword, setPassword] = useState('');

  let [data, setData] = useState();


  var handleChange = (event) => {
    setData({...data ,[event.target.name]:event.target.value});
  };

  var handleSubmit = async (event) => { 
   event.preventDefault();
    var responce = await getData(data.Email)
    console.log(responce);
    if (responce.data.length==0)
    {
      setEmail('*user doesn\'t found');
    }
    else
    {
      setEmail('');
      if (responce.data[0].Password === data.Password) {
        navigate(`/profile/${data.Email}`);
      }
      else { 
        setPassword('*incorrect password');
      }
      }

  };

  return (
    <div className="container-fluid row top">
      <div className="col-7 p-0">
        <img
          src="/image/loginpage.jpg"
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
                htmlFor="email"
                className="col-4 d-flex justify-content-end font"
              >
                Email-Id :{" "}
              </label>
              <input
                type="email"
                placeholder="Enter Your Email-Id"
                name="Email"
                className="col-5"
                onChange={handleChange }
              />
              <div className="col-3 text-danger">{errorEmail}</div>
            </div>
            <div className="row my-4">
              <label
                htmlFor="pass"
                className="col-4 d-flex justify-content-end font"
              >
                Password :{" "}
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="col-5"
                name="Password"
                onChange={handleChange}
              />
              <div className="col-3 text-danger">{errorPassword}</div>
                      </div>
                      <div className='my-4'>
                      <button type="submit" className="btn ">Login</button>
                            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
