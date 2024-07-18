import React from "react";
import Navbar from './Navbar';

function Header() {
    return (
        <div className="flex md:flex-row flex-col items-center nowrap py-8 shadow-md dark:shadow-none">
            <a href="#" className="text-nowrap ml-4 mr-0 xl:mr-12 lg:mr-12 md:mr-8">My MERN App</a>
            <Navbar />
        </div>
    )
};

export default Header;