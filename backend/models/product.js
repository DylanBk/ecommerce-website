const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema ({
    productName: {
        type: String,
        required: true,
    },
    productDescription: {
        type: String,
        required: true
    },
    productCategory: {
        type: String,
        required: true,
    },
    productCoverImage: {
        type: String,
        required: true
    },
    dateUploaded: {
        type: Date,
        default: Date.now
    }
    // productSubImages: {
    //     type: Array,
    //     required: false
    // }
})

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;