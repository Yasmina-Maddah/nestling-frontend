import React from 'react';
import './LoginPage.css';
import Logo from '../../assets/logo/2.png';

const Login = () => {
    return (
        <div className="container">
            <img src={Logo} alt="Nestling Logo" className="logo" />
            <h1>Nestling</h1>
            <p>"Unlocking Potential, One Story at a Time"</p>
            <form>
                <input type="email" placeholder="Email" required className="input-field" />
                <input type="password" placeholder="Password" required className="input-field" />
                <button type="submit" className="submit-button-two">Login</button>
            </form>
        </div>
    );
};

export default Login;
