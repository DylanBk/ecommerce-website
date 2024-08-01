import React from 'react';

function ProductForm() {
    return (
        <div>
            <form action='/api/products/createproduct' method='post'  encType="multipart/form-data">
                <input name='product-name' type='text'></input>
                <input name='product-category' type='text'></input>
                <input name='product-desc' type='text'></input>
                <input name='product-cover-img' type='file'></input>
                <input name='product-sub-imgs' type='file'></input>
                <button name='create-product-btn' type='submit'>Create</button>
            </form>
        </div>
    )
}

export default ProductForm;