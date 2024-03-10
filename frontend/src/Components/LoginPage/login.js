import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
export const Login = () => {
  return (
    <div className="loginPage">
      <div className="outer">
        <section className="vh-100">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img
                  src="Images/login_side_img.avif"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                {/* logo */}
                <div className="d-flex flex-row align-items-center justify-content-center mb-4">
                  <img src="Images/kpmg-logo-1.webp"></img>
                </div>

                <form>
                  <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <button
                      type="button"
                      className="btn btn-primary btn-floating form-control  form-control-lg"
                    >
                      <span className="bi bi-google "></span> Sign in with
                      Google
                    </button>
                  </div>

                  <div className="divider d-flex align-items-center my-4">
                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                  </div>

                  {/* Email input  */}
                  <div className="form-outline mb-4">
                    <label
                      className="email-label d-flex justify-content-between align-items-center"
                      htmlFor="email"
                    >
                      Email address
                    </label>
                    <div className="input-group email-input">
                      <input
                        type="email"
                        id="email"
                        className="form-control form-control-lg"
                        placeholder="Enter a valid email address"
                      ></input>
                      <span>
                        <i className="bi bi-envelope"></i>
                      </span>
                    </div>
                  </div>

                  {/* Password input */}
                  <div className="form-outline mb-3">
                    <label
                      className="d-flex justify-content-between align-items-center"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <div className="input-group password-input">
                      <input
                        type="password"
                        id="password"
                        className="form-control form-control-lg"
                        placeholder="Enter password"
                      />
                      <span>
                        <i className="bi bi-key"></i>
                      </span>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <a href="#!" className="text-body">
                      Forgot password?
                    </a>
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg"
                      style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    >
                      Login
                    </button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      Don't have an account?{" "}
                      <Link to="/signup" className="link-danger">
                                        Register
                                        </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
