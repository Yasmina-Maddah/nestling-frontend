import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../api';
import '../LoginPage/Auth.css';
import Logo from '../../assets/logo/2.png';

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await API.post('/signup', {
                email: formData.email,
                username: formData.username,
                password: formData.password,
            });
            localStorage.setItem('token', response.data.token);
            navigate('/dashboard'); 
        } catch (err) {
            setError(err.response?.data?.message || 'Signup failed');
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <img src={Logo} alt="Nestling Logo" className="auth-logo" />
                <h1>Nestling</h1>
                <p>"Unlocking Potential, One Story at a Time"</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="auth-input-field"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        required
                        className="auth-input-field"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        className="auth-input-field"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        required
                        className="auth-input-field"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    <button type="submit" className="auth-submit-button">
                        Sign Up
                    </button>
                </form>
                {error && <p className="error-message">{error}</p>}
                <p className="login-redirect">
                    <span
                        className="login-link"
                        onClick={() => navigate('/Login')}
                    >
                        Already have an account?{' '}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
