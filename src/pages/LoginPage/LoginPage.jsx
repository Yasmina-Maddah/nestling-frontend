import React from 'react';
import './LoginPage.css';
import Logo from '../../assets/logo/2.png';

const Login = () => {
    return (
        <div className="info-container">
            <img src={Logo} alt="Nestling Logo" className="Nlogo" />
            <h1>Nestling</h1>
            <p>"Unlocking Potential, One Story at a Time"</p>
            <form>
                <input type="email" placeholder="Email" required className="info-input-field" />
                <input type="password" placeholder="Password" required className="info-input-field" />
                <button type="submit" className="info-submit-button-two">Login</button>
            </form>
        </div>
    );
};

export default Login;
