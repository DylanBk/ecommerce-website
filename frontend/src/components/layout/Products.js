import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetch_products = async () => {
            try {
                const response = await axios.get('/api/products/all');
                const data = response.data
                // console.log(response.data)
                // console.log(typeof(response.data))
                console.log(data)
                // setProducts(response.data);
                // setProducts([response.data])
                // console.log(typeof(products))
                // const flatProducts = data.map(item => item[1]); // We only need the product objects
                // setProducts(flatProducts);
                if (response && response.data && typeof response.data === 'object') {
                    // Convert the object values to an array
                    const flatProducts = Object.values(response.data);
                    console.log(`flatProducts: ${flatProducts}`)
                    setProducts(flatProducts);
                  }
            } catch (error) {
                setError(error.message);
            };
        };

        fetch_products();
    }, []);

    return (
        <div className='bg-green-500'>
            <h1>Product List</h1>
            {error && <p>Error: {error}</p>}
            <ul>
                {products.map(product => (
                    <li key={product.productName}>
                        <p>Product: {product.productName}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductsList;