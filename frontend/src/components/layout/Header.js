import React, {useState} from "react";
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const Header = ({ onCategoryChange }) => {
    return (
        <div className="flex md:flex-row flex-col items-center nowrap py-8 shadow-md dark:shadow-none">
            <Link
                href="#" className="text-nowrap ml-4 mr-0 xl:mr-12 lg:mr-12 md:mr-8"
                to="/"
                >My MERN App</Link>
            <Navbar onCategoryChange={onCategoryChange} />
        </div>
    )
};

export default Header;