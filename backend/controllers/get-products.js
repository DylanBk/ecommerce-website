const Product = require('../models/product');

const User = require('../models/user');

const get_products = async () => {
    try {
        console.log("Fetching Products...")
        const products = await Product.find({}).exec();

        if (!products || products.length === 0) {
            throw new Error("No Products Found")
        }
        console.log("Products Fetched");
        // const productsArr = Object.keys(products).map((key) => [key, products[key]]);
        const productsArr = Object.entries(products);
        console.log(productsArr)
        console.log(typeof(productsArr))
        return productsArr;
    } catch(error) {
        console.error(error.message);
        throw error;
    };
};

module.exports = { get_products };