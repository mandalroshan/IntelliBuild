import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Typography, Grid } from '@mui/material';
import { Person, Email, Lock } from '@mui/icons-material';
import './signup.css';

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        let errors = {};
        if (!formData.username.trim()) {
            errors.username = 'Username is required';
        }
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        if (!formData.password.trim()) {
            errors.password = 'Password is required';
        }

        // If there are errors, stop submission and set errors state
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        // If validation passes, continue with form submission logic
        // For example, send data to backend or dispatch an action
        console.log(' Account created:', formData);
    };

    return (
        <div className="signup-container">
            <div className="signup-wrapper">
                <div className="signup-content">
                    <div className="signup-form">
                        <Typography variant="h4" gutterBottom className="form-title">Create an Account</Typography>
                        <form className="form" onSubmit={handleSubmit}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        id="username"
                                        label="Username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        error={!!errors.username}
                                        helperText={errors.username}
                                        InputProps={{
                                            startAdornment: <Person />,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        id="email"
                                        label="Email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        error={!!errors.email}
                                        helperText={errors.email}
                                        InputProps={{
                                            startAdornment: <Email />,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        id="password"
                                        label="Password"
                                        type="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        error={!!errors.password}
                                        helperText={errors.password}
                                        InputProps={{
                                            startAdornment: <Lock />,
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <Button variant="contained" color="primary" fullWidth type="submit" className="btn-signup">Sign Up</Button>
                        </form>
                        <Typography variant="body2" className="text-center mt-3">
                            Already have an account? 
                            <Link to="/" className="text-decoration-none">Log In</Link>
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;
