const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const { processFile } = require('../utils/process-file');
const { get_products, get_products_categorised } = require('../controllers/get-products');

const uploadsDir = path.join(__dirname, '..', 'uploads');
console.log(uploadsDir);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsDir);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });


router.get('/all', async (req, res) => {
    try {
        const products = await get_products();
        console.log(typeof(products))
        res.json(products);
    } catch (error) {
        console.error(`Error Fetching Products: ${error.message}`);
        res.status(500).json({ message: "Error Fetching Products" });
    };
});

router.get('/category', async (req, res) => {
    try {
        const { category } = req.query;
        if (category) {
            console.log(`Backend: Selected Category: ${category}`);

            const products = await get_products_categorised(category);
            res.json(products);
        } else {
            return res.status(400).json({ message: "No Category" });
        };
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Error Fetching Products" });
    };
});

router.post('/createproduct', upload.fields([
    { name: "product-cover-img", maxCount: 1},
    { name: "product-sub-imgs", maxCount: 1}
]), async (req, res) => {


    try {
        const {
            "product-name": product_name,
            "product-category": product_category,
            "product-desc": product_description,
        } = await req.body;

        const product_cover_image = req.files && req.files['product-cover-img'] ? req.files['product-cover-img'][0]: null;
        // const product_sub_images = req.files && req.files['product-sub-imgs'] ? req.files['product-sub-imgs'][0]: null;

        if (!product_cover_image) {
            res.status(400).json({ message: "No file uploaded"});
        }

        const product_cover_image_dataURL = await processFile(product_cover_image);

        let product = new Product({
            productName: product_name,
            productCategory: product_category,
            productDescription: product_description,
            productCoverImage: product_cover_image_dataURL
        });

        await product.save();

        res.redirect('/');
    } catch (error) {
        res.status(500).json({ message: error.message })
    };
});


module.exports = router;