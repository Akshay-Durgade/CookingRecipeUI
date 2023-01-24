import "./Cookingfinal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import ListGroup from "react-bootstrap/ListGroup";

export function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="row m-0 p-0 position-fixed header ">
        <nav className="navbar navbar1 navbar-expand-lg p-0">
          <div className="container-fluid">
            <Link to={"/"} className="navbar-brand">
              <img src="./image/logo.png" width="180px" height="70px" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon bg-light"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-4">
                <li className="nav-item">
                  <Link
                    to={"/"}
                    className="nav-link active hover_line"
                    aria-current="page"
                  >
                    HOME
                  </Link>
                </li>
                <li className="nav-item dropdown ">
                  <a
                    className="nav-link dropdown-toggle active hover_line"
                    href=""
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    RECIPES
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to={"/category"} className="dropdown-item bg_drop">
                        All
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link
                        to={"/category/Breakfast"}
                        className="dropdown-item bg_drop"
                      >
                        Breack Fast{" "}
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <Link
                      to={"/category/lunch"}
                      className="dropdown-item bg_drop"
                    >
                      Lunch{" "}
                    </Link>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link
                        to={"/category/dinner"}
                        className="dropdown-item bg_drop"
                      >
                        Dinner
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle active hover_line"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    QUICK & EASY
                  </a>
                  <ul className="dropdown-menu">
                    <li className="">
                      <Link
                        to={"/categorysub/Quick Dinners"}
                        className="dropdown-item bg_drop"
                      >
                        Quick Dinners
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider bg_drop" />
                    </li>
                    <li>
                      <Link
                        to={"/categorysub/Easy & Healthy"}
                        className="dropdown-item bg_drop"
                      >
                        Easy & Healthy
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider bg_drop" />
                    </li>
                    <li>
                      <Link
                        to={"/categorysub/Quick Vegetarian"}
                        className="dropdown-item bg_drop"
                      >
                        Quick Vegetarian
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to={"/about"} className="nav-link active hover_line">
                    ABOUT US
                  </Link>
                </li>
              </ul>

              <ul className="navbar-nav  ml-5 mb-4">
                <li className="nav-item ml-5">
                  <Link to={"/signup"} className="nav-link active hover_line">
                    SIGN-UP
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link active hover_line">
                    LOGIN-UP
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active hover_line"
                    onClick={handleShow}
                  >
                    CONTACT US
                  </Link>
                  <div >
                  <Offcanvas show={show} onHide={handleClose} >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title>
                        <h1 className="font">Crafty-recipes</h1>
                        <hr></hr>
                      </Offcanvas.Title>
                      
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <ListGroup variant="flush" >
                        <ListGroup.Item >
                          <h5 className="font"><b>Email Id:-</b></h5>
                          <h6 className="font">Crft-recipe@gmail.com</h6>
                        </ListGroup.Item>
                        <ListGroup.Item >
                          <h5 className="font"><b>Phone No:-</b></h5>
                          <h6 className="font">+91-1110111011 </h6>
                        </ListGroup.Item>
                        <ListGroup.Item >
                          <h5 className="font"><b>Owned By:-</b></h5>
                          <h6 className="font">Krunal Sonani</h6>
                          <h6 className="font">Pratiksha Barge</h6>
                          <h6 className="font">Akshay Durgade</h6>
                          <hr className="font"></hr>
                        </ListGroup.Item>
                      </ListGroup>
                    </Offcanvas.Body>
                    </Offcanvas>
                    </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
