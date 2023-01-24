import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteUser, getUser, postPassword } from "../service";
import "./profile.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export function Profile() {
  var params = useParams();
  var navigate = useNavigate();
  var [user, setUser] = useState({
    Name: "",
    Email: "",
    MobileNo: "",
    DOB: "",
  });
  const [modalShow, setModalShow] =useState(false);
  var handleDelete = async () => {
    console.log(1);
    var responce = await deleteUser(params);
    navigate("/login");
  };
  var getData = async () => {
    var responce = await getUser(params.Email);
    console.log(responce);
    setUser(responce.data[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container-fluid m-0 p-0">
      <div className="p-top ">
        <div className=" m-top d-flex justify-content-center align-items-center">
          <div className="i-main">
            <div className="row my-2">
              <div className="col-4 text-end h4">First Name:-</div>
              <div className="col-8 h4">{user.Name}</div>
            </div>
            <div className="row my-2">
              <div className="col-4 text-end h4">Email Id:-</div>
              <div className="col-8 h4">{user.Email}</div>
            </div>
            <div className="row my-2">
              <div className="col-4 text-end h4">Mobile No.:-</div>
              <div className="col-8 h4">{user.MobileNo}</div>
            </div>
            <div className="row mt-4 h4 px-5 gap-5">
              <input
                type="button"
                className=" col-4  btn btn-success text-dark "
                value="Change Password"
                onClick={() => setModalShow(true)}
              ></input>
              <ChangePassword
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
              <input
                type="button"
                className=" col-4  btn btn-danger text-dark"
                value="Delete Profile"
                onClick={handleDelete}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChangePassword(props) {

    let [data, setData] = useState(
        {
            Email:useParams().Email,
          NewPassword: '',
          ConfirmPassword:''
        }
    );
    var navigate = useNavigate()
    let [error, setError] = useState({
       
      errorPassword: '',
      errorRePassword:''
    });
    var handleChange = (event) => {
        setData({...data ,[event.target.name]:event.target.value});
      };
    
    var handleSubmit = async (event) => {  
        event.preventDefault();
        if (validate())
        {
            var responce = await postPassword(data)
            console.log(responce);
            navigate('/login');
        }
        
       
      };
    
      var validate = () => { 
          error = {};
        
          var Passwordregx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    
        if (!data.NewPassword || !Passwordregx.test(data.NewPassword)) {
          setError({errorPassword: '*invalid password'})
          return false;
        }
        else { 
          setError({errorPassword:''})
        }
    
          if (!data.ConfirmPassword || !(data.ConfirmPassword === data.NewPassword)) {
          setError({ ...error, errorRePassword: '*doesn\'t match'})
          return false;
        }
          else { 
          setError({ ...error, errorRePassword: '' })
          return true;
        }
    
      }



  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Change Password
        </Modal.Title>
      </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit}>
            <div className="row my-2">
              <div className="col-4 text-end h4">New Password:-</div>
                      <input type="password" className="col-5 " name="NewPassword" onChange={handleChange} />
                      <div className="col-3 text-danger" >{error.errorPassword}</div>
            </div>
            <div className="row my-2">
              <div className="col-4 text-end h4">Confirm Password:-</div>
              <input type="password" className="col-5 " name="ConfirmPassword" onChange={handleChange}/>
              <div className="col-3 text-danger" >{error.errorRePassword}</div>
                  </div>
            
                 
            <div className="row mt-4 h4 px-5 gap-5 d-felx justify-content-center">
                  <button type="submit" className="btn col-4 btn-success text-dark">Update</button>
                  </div>
                  </form>
      </Modal.Body>
    </Modal>
  );
}
