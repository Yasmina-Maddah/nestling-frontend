import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../LoginPage/Auth.css';
import Logo from '../../assets/logo/2.png';

const SignUp = () => {
    const navigate = useNavigate(); 

    const handleLoginNavigation = () => {
        navigate('/Login'); 
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <img src={Logo} alt="Nestling Logo" className="auth-logo" />
                <h1>Nestling</h1>
                <p>"Unlocking Potential, One Story at a Time"</p>
                <form>
                    <input type="email" placeholder="Email" required className="auth-input-field" />
                    <input type="text" placeholder="Username" required className="auth-input-field" />
                    <input type="password" placeholder="Password" required className="auth-input-field" />
                    <input type="password" placeholder="Confirm Password" required className="auth-input-field" />
                    <button type="submit" className="auth-submit-button">Sign Up</button>
                </form>
                <p className="login-redirect">
                    <span className="login-link" onClick={handleLoginNavigation}>
                    Already have an account?{' '}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
