import React from 'react';
import renderOptions from '../../utils/render-dropdown-options';
import categories from '../../utils/categories';
import ToLastPage from '../common/ToLastPage';

import backArrowBlack from '../../assets/back-arrow-black.png'

function ProductForm() {
    return (
        <div>
            <ToLastPage style="p-2 rounded ml-2 bg-primary  hover:bg-opacity-70" />
            
            <form
            action='/api/products/createproduct'
            method='post'  encType="multipart/form-data"
            className='relative h-auto w-4/5 md:w-2/5 flex flex-col gap-4 p-2 pb-14 m-auto bg-gray-300 dark:bg-darker-grey text-lg'
            >
                <label>Product Name:
                    <input
                        name='product-name'
                        type='text'
                        className='w-3/5 border-b border-black dark:border-white ml-2 bg-gray-300 dark:bg-darker-grey text-black dark:text-white outline-none'
                        required></input>
                </label>
                <select
                    id='category-select'
                    name='product-category'
                    className='!border-none bg-gray-300 hover:bg-blue-300 dark:!bg-darker-grey dark:hover:!bg-gray-700'>
                    {renderOptions(categories)}
                </select>
                <label className='flex flex-row items-center'>
                    Product Description
                    <textarea
                        name='product-desc'
                        className='h-10 w-3/5 p-2 ml-2 text-black outline-white'
                        required
                    ></textarea>
                </label>
                <label>Product Main Image
                    <input
                    name='product-cover-img'
                    type='file'
                    className='ml-2'
                    required></input>
                </label>
                <label>Product Sub-Images
                    <input
                    name='product-sub-imgs'
                    type='file'
                    className='ml-2'
                    required></input>
                </label>
                <button
                    name='create-product-btn'
                    type='submit'
                    className=' absolute w-full left-0 bottom-0 p-2 mt-2 bg-blue-600 !text-white hover:bg-blue-700'
                    >Create</button>
            </form>
        </div>
    )
}

export default ProductForm;