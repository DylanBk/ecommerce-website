import React from "react";
import { Link } from 'react-router-dom';

function RegisterForm() {
    return (
        <div>
            <form action="/api/users/signup" method="post">
                <label>Email
                    <input name="email" type="email" placeholder="name@example.com" required></input>
                </label>
                <label>Username (optional)
                    <input name="username" type="text"></input>
                </label>
                <label>Create Password
                    <input name="password" type="password" required></input>
                </label>
                {/* <label>Confirm Password
                    <input name="password-confirm" type="password"></input>
                </label> */}
                <button name="register-btn" type="submit">Sign Up</button>
            </form>
            <p>Already got an account?<span className="font-semibold"><Link to="/login">Sign In</Link></span></p>
        </div>
    )
}

export default RegisterForm;