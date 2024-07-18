import React from "react";
import { Link } from 'react-router-dom';
import Header from '../layout/Header';

function Home() {
    return (
        <div>
            <Header />
            <Link to="/signup">Register</Link>
            <Link to="/login">Login</Link>
        </div>
    )
}

export default Home;