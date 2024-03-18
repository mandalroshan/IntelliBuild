// LoginPage.js
import './login.css'; // Import your custom CSS file for styling

// LoginPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const LoginPage = () => {
    
    return (
        <div className="login-container">
            <div className="login-wrapper">
                
                <div className="login-images">
                    <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740&t=st=1710034201~exp=1710034801~hmac=4fee8a3377e06705d6cdf47988af9a020a64276e1832031cfcb019686fd68bb4" alt="KPMG Logo" />
                </div>
                <div className="login-content">
                <div className="login-logo">
                            <img src="Images/kpmg-logo-1.png" alt="Logo" />
                            <h2><i className="bi bi-person-circle"></i> IntelliBuild</h2>
                         </div>
                    <div className="login-form">
                        <form>
                            <div className="form-group email">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                                    </div>
                                    <input type="email" id="email" className="form-control" placeholder="Username" required />
                                </div>
                            </div>
                            <div className="form-group email">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="bi bi-lock"></i></span>
                                    </div>
                                    <input type="password" id="password" className="form-control" placeholder="Password"required />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Login</button>
                        </form>
                        <div className="text-center mt-3">
                            <a href="#" className="text-decoration-none text-muted">Forgot Password?</a>
                        </div>
                    </div>
                    <div className="signup-option">
                        Don't have an account? <Link to="/signup" className="text-decoration-none">Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
