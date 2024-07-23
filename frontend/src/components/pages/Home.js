import React from "react";
import { Link } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

import ProductForm from "../layout/ProductForm";
import ProductsList from "../layout/Products";

function Home() {
    return (
        <div>
            <Header />
            <Link to="/signup">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/products">All Products</Link>
            <ProductForm />
            <ProductsList />
            <Footer />
        </div>
    )
}

export default Home;