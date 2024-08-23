import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Footer() {

    const location = useLocation();
    const currentPath = location.pathname;

    // PAGE RELATIVE STYLES
    if (currentPath === '/' || currentPath.includes('home') || currentPath.includes('index')) {
        var style = "h-28 w-full fixed bottom-0 flex flex-row items-center justify-around bg-gray-400 dark:bg-darker-grey";
    } else {
        var style = "h-28 w-full absolute bottom-0 flex flex-row items-center justify-around bg-red-600 dark:bg-red-800"
    }


    return (
        <div className={style}>
            <div>col1</div>
            <div>col2</div>
            <div>col3</div>
            <div>col4</div>
            <div>col5</div>
        </div>
    )
}

export default Footer;