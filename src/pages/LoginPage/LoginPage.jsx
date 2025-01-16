import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../api';
import './Auth.css';
import Logo from '../../assets/logo/2.png';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await API.post('/login', formData);
            localStorage.setItem('token', response.data.token);
            navigate('/dashboard'); // Navigate to the dashboard after login
        } catch (err) {
            setError(err.response?.data?.error || 'Login failed');
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
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        className="auth-input-field"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <button type="submit" className="auth-submit-button">
                        Login
                    </button>
                </form>
                {error && <p className="error-message">{error}</p>}
            </div>
        </div>
    );
};

export default Login;
