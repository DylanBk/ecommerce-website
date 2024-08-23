import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ProductsListTitle({ category }) {
    const title = category || "All Products";
    return (
        <h1 className='mx-auto text-4xl z-10'>{title}</h1>
    )
}

const ProductsList = ({ category }) => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetch_products = async () => {
            try {
                let response
                if (category) {
                    const query = new URLSearchParams({ category: category || '' }).toString();

                    response = await fetch(`/api/products/category?${query}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                } else {
                    response = await fetch('/api/products/all', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                };

                if (!response.ok) {
                    console.error(`Network Response not ok: ${response.statusText}`);
                }

                const data = await response.json();

                if (data && typeof(data) === "object") {
                    const flat_products = Object.values(data);

                    let product_info = [];
                    let products = [];
                    const num_products = flat_products.length;

                    for (let i = 0; i < num_products; i++) {
                        let product = flat_products[i][1];
                        product_info.push([product.productName, product.productCategory, product.productDescription, product.productCoverImage, product.dateUploaded])
                        products.push(product_info)
                    };

                    setProducts(products);
                }
            } catch (error) {
                console.error('Fetching products failed:', error);
                setError(error.message);
            }
        };

        fetch_products();
    }, [category]);

    return (
        <div id='products-section-wrapper' className='flex-grow flex-shrink flex flex-col pb-10 lg:pb-28 dark:bg-darkest-grey'>
            <div className='relative flex flex-row'>
                <Link className='absolute self-center p-2 rounded-full ml-4 bg-blue-500 text-center text-white z-10 hover:bg-blue-600 transition-all' to="/create-product">
                    Upload+
                </Link>
                <ProductsListTitle category={category} />
            </div>

            <div className='h-full w-full absolute flex flex-row flex-auto flex-wrap gap-4 self-center !justify-around sm:justify-start px-4 md:px-10 pb-4 mt-12 dark:bg-darkest-grey'>
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <Link
                            key={index}
                            className='h-72 w-1/2 min-w-64 sm:w-1/3 md:w-1/5 min-w-28 relative flex flex-col p-2 rounded-md mt-6 bg-gray-300 dark:bg-darker-grey dark:bg-opacity-60 hover:scale-105 transition-all'
                            to=""
                            >
                            <ul id='product-container' className='h-full w-full'>
                                <li className='h-2/3 w-full'>
                                    <img src={product[index][3]} className='border aspect-video' alt={`${product.productName} cover`} />
                                </li>
                                <div className='mt-6'>
                                    <li className='text-md'>{product[index][0]}</li>
                                    <li className='text-sm'>Category: {product[index][1]}</li>
                                    <li className='text-sm'>Description: {product[index][2]}</li>
                                </div>
                            </ul>
                        </Link>
                    ))
                ) : (
                    <h2> No Products </h2>
                )}
            </div>
        </div>
    );
};

export default ProductsList;