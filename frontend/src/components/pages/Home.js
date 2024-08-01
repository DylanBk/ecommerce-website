import React, { useState } from "react";
import Header from '../layout/Header';
import Footer from '../layout/Footer';

import ProductsList from "../layout/Products";

function Home() {
    const [category, setCategory] = useState('');

    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory);
    };

    return (
        <div>
            <Header onCategoryChange={handleCategoryChange} />
            <ProductsList category={category} />
            <Footer />
        </div>
    )
}

export default Home;