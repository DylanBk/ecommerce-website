import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductsListTitle(category) {
    const title = category || "All";
    return (
        <h1 className='mx-auto text-4xl z-10'>{title} Products</h1>
    )
}

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetch_products = async () => {
            try {
                const response = await axios.get('/api/products/all');

                if (response && response.data && typeof(response.data) === 'object') {
                    const flatProducts = Object.values(response.data);

                    // for (let product in flatProducts) {
                    //     for (let product_info_item in product) {
                    //         products.push(product)
                    // }}


                    let product_info = [];
                    let products = []
                    const num_products = flatProducts.length;
                    for (let i = 0; i < num_products; i++) {
                        console.log(i)
                        let product = flatProducts[i][1];
                        product_info.push([product.productName, product.productDescription, product.productCoverImage, product.dateUploaded])
                        products.push(product_info)
                        // console.log(product_info)
                        // console.log(products)
                    };
                    console.log(`Product Info: ${product_info}`)
                    console.log(`All Products: ${products}`)


                    // console.log("test")
                    // console.log(products)

                    // const product = flatProducts[0][1];
                    // const product_info = [product.productName, product.productDescription, product.productCoverImage, product.dateUploaded];
                    // console.log(product_info)                    
                    setProducts(products);
                    }
            } catch (error) {
                setError(error.message);
            }
        };

        fetch_products();
    }, []);

    return (
        <div id='products-section-wrapper' className='flex flex-col bg-darkest-grey'>

            {ProductsListTitle("")}

            {error && <p>Error: {error}</p>}
            <div className='relative flex flex-row flex-wrap gap-4 px-4 pb-4 bg-darkest-grey'>
                {products.map((product_info, index) =>
                <a href='#' className='h-72 h-auto w-1/4 min-w-28 relative flex flex-col p-2 rounded-md mt-6 dark:bg-darker-grey dark:bg-opacity-60 dark:hover:scale-105 transition-all'>
                    <ul key={index} id='product-container' className='h-full w-full'>
                        <li className='h-2/3 w-full'>
                            <img src={product_info[index][2]} className=' border aspect-video'></img>
                        </li>
                        <div className='mt-6'>
                            <li>{product_info[index][0]}</li>
                            <li className='text-sm'>Description {product_info[index][1]}</li>
                        </div>
                    </ul>
                </a>
                )}
            </div>
        </div>
    )
}

export default ProductsList;