import React from "react";
import { Link } from 'react-router-dom';

function LoginForm() {
    return (
        <div>
            <form action="/api/users/login" method="post">
                <label>Email
                    <input name="email" type="email" placeholder="name@example.com" required></input>
                </label>
                <label>Password
                    <input name="password" type="password" required></input>
                </label>
                <button name="register-btn" type="submit">Login</button>
            </form>
            <p>Don't have an account?<span className="font-semibold"><Link to="/signup">Sign Up</Link></span></p>
        </div>
    )
}

export default LoginForm;