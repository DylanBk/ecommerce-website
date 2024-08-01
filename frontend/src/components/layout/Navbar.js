import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categories from '../../utils/categories.js';
import CategoryDropdown from "../../utils/category-dropdown";
import searchIconBlack from '../../assets/search-icon-black.png';
import searchIconWhite from '../../assets/search-icon-white.png';
import cartIconBlack from '../../assets/cart-icon-black.png';
import cartIconWhite from '../../assets/cart-icon-white.png';
import userIconBlack from '../../assets/user-icon-black.png';
import userIconWhite from '../../assets/user-icon-white.png';

const { check_session } = require('../../utils/check-session.js');


const Navbar = ({ onCategoryChange }) => {
    const [sessionExists, setSessionExists] = useState(null);

    useEffect(() => {
        const verify_session = async () => {
            const session = await check_session();
            setSessionExists(session);
        };

        verify_session();
    }, []);

    if (sessionExists === null) {
        return (
            <div>
                <p>
                    Loading...
                </p>
            </div>
        )
    }

    return (
        <div id="navbar" className="w-full flex flex-row xl:gap-5 lg:gap-5 md:gap-3 sm:gap-1 items-center justify-between m-auto">
            <a className="ml-2 hidden xl:ml-28 sm:mr-2 sm:flex mr-0 cursor-pointer" href="#">About</a>
            <div className="flex flex-row w-full mx-auto ml-0 xl:ml-16 lg:ml-12 md:ml-12 sm:ml-12">
                <CategoryDropdown categories={categories} onCategoryChange={onCategoryChange}/>
                <form id="main-search-bar" className="w-full min-w-32 flex flex-row border-0 rounded-r-full mx-auto">
                    <input id="search-bar-query-normal" name="search-bar-query-normal" className="hidden sm:block w-4/5 px-2 py-2 border-0 rounded-none outline-none dark:bg-gray-800" type="text" placeholder="Search for a product..."></input>
                    <input id="search-bar-query-small" name="search-bar-query-small" className="block sm:hidden md:hidden lg:hidden xl:hidden w-3/4 p-0 border-0 rounded-none outline-none dark:bg-gray-800" type="text" placeholder="Search..."></input>
                    <div className="w-1/4 max-w-12 relative border-0 rounded-r-full bg-white dark:bg-gray-800">
                        <button name="search-bar-btn" className="h-full w-full absolute flex items-center justify-center rounded-full bg-white dark:bg-gray-800 hover:bg-blue-200 dark:hover:bg-gray-700 hover:bg-opacity-30 transition-all" type="submit">
                            <div className="md:w-6 w-4 relative">
                                <picture>
                                    <source srcSet={searchIconBlack} media="(prefers-color-scheme: light)"></source>
                                    <source srcSet={searchIconWhite} media="(prefers-color-scheme: dark)"></source>
                                    <img src={searchIconWhite} alt="Search Icon"></img>
                                </picture>
                            </div>
                        </button>
                    </div>
                </form>
            </div>
            { sessionExists ? (
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
                        <a className="p-2 rounded-full mr-4 hover:bg-gray-700 hover:bg-opacity-30" href="#">
                        <div className="w-7">
                            <picture>
                                <source srcSet={userIconBlack} media="(prefers-color-scheme: light)"></source>
                                <source srcSet={userIconWhite} media="(prefers-color-scheme: dark)"></source>
                                <img src={userIconBlack} alt="User Icon"></img>
                            </picture>
                        </div>
                        </a>
                 </div> ) : (
                    <Link className="min-w-12 md:min-w-16 self-center mr-4" to="/login">
                        Sign In
                    </Link>
                 )}
        </div>
)};

export default Navbar;