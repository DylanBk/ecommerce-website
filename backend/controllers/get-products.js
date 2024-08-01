const Product = require('../models/product');

const get_products = async () => {
    try {
        console.log("Fetching Products...")
        const products = await Product.find({}).exec();

        if (!products || products.length === 0) {
            throw new Error("No Products Found");
        }
        console.log("Products Fetched");

        const productsArr = products.map(product => [product._id, product]);

        return productsArr;
    } catch (error) {
        console.error(error.message);
    };
};

const get_products_categorised = async (category) => {
    try {
        console.log(`bruhhh ${category}`)
        if (!category) {
            throw new Error("No Category")
        }
        if (category === "All Products") {
            const productsArr = get_products();
            return productsArr;
        }
        const products = await Product.find({ productCategory: category });

        if (!products || products.length === 0) {
            products = "No Products";
            return products;
        }
        console.log("Categorised Products Fetched")

        const productsArr = products.map(product => [product._id, product]);

        return productsArr;
    } catch (error) {
        console.error(error.message);
    };
};

module.exports = { get_products, get_products_categorised };