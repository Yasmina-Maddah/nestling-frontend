import React from 'react';
import './SignUpPage.css';
import Logo from '../../assets/logo/2.png';

const SignUp = () => {
    return (
        <div className="container">
            <img src={Logo} alt="Nestling Logo" className="logo" />
            <h1>Nestling</h1>
            <p>"Unlocking Potential, One Story at a Time"</p>
            <form>
                <input type="email" placeholder="Email" required className="input-field" />
                <input type="text" placeholder="Username" required className="input-field" />
                <input type="password" placeholder="Password" required className="input-field" />
                <input type="password" placeholder="Confirm Password" required className="input-field" />
                <button type="submit" className="submit-button">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
