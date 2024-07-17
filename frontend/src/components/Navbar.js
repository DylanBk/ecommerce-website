import React from "react";
import categories from '../utils/categories';
import CategoryDropdown from "../utils/category-dropdown";
import searchIconWhite from '../assets/search-icon-white.png'
import cartIconBlack from '../assets/cart-icon-black.png';
import cartIconWhite from '../assets/cart-icon-white.png';
import userIconBlack from '../assets/user-icon-black.png';
import userIconWhite from '../assets/user-icon-white.png';


function Navbar() {
    return (
        <div id="navbar" className="w-full flex flex-row xl:gap-5 lg:gap-5 md:gap-3 sm:gap-1 items-center justify-between m-auto">
            <a className="ml-2 xl:ml-28 mr-12 sm:mr-2 mr-0 cursor-pointer hover:underline" href="#">About</a>
            <div className="flex flex-row mx-auto ml-0 xl:ml-16 lg:ml-12 md:ml-12 sm:ml-12">
                <CategoryDropdown categories={categories}/>
                <form id="main-search-bar" className="xl:w-96 lg:w-80 md:w-72 sm:w-48 min-w-32 flex flex-row mx-auto">
                    <input name="search-bar-query" className="hidden sm:block w-4/5 px-2 py-2 border-0 rounded-none outline-blue-500 dark:bg-gray-800" type="text" placeholder="Search for a product..."></input>
                    <input name="search-bar-query" className="block sm:hidden md:hidden lg:hidden xl:hidden w-3/4 p-0 border-0 rounded-none outline-blue-500 dark:bg-gray-800" type="text" placeholder="Search..."></input>
                    <button name="search-bar-btn" className="w-1/4 flex items-center justify-center rounded-r-full bg-blue-500 hover:bg-blue-700 transition-all" type="submit">
                        <div className="xl:w-8 lg:w-8 md:w-6 w-4 relative">
                            <img src={searchIconWhite} alt="Search Icon"></img>
                        </div>
                    </button>
                </form>
            </div>
            <div className="flex flex-row gap-0 lg:gap-7 md:gap-5 sm:gap-2">
                <a className="p-2 rounded-full hover:bg-gray-700 hover:bg-opacity-30" href="#">
                    <div className="w-7">
                        <picture>
                            <source srcSet={cartIconBlack} media="(prefers-color-scheme: light)"></source>
                            <source srcSet={cartIconWhite} media="(prefers-color-scheme: dark)"></source>
                            <img src={cartIconBlack} alt="Shopping Cart Icon"></img>
                        </picture>
                    </div>
                </a>
                <a className="p-2 rounded-full hover:bg-gray-700 hover:bg-opacity-30" href="#">
                <div className="w-7">
                    <picture>
                        <source srcSet={userIconBlack} media="(prefers-color-scheme: light)"></source>
                        <source srcSet={userIconWhite} media="(prefers-color-scheme: dark)"></source>
                        <img src={userIconBlack} alt="User Icon"></img>
                    </picture>
                </div>
                </a>
            </div>
        </div>
    )
}

export default Navbar;