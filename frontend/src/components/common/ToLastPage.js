import React from "react";
import { useNavigate } from "react-router-dom";

import backArrowWhite from '../../assets/back-arrow-white.png'

const ToLastPage = ({style}) => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <button
            onClick={goBack}
            className={`flex flex-row ${style}`}>
                <picture>
                    <img srcSet={backArrowWhite} className="h-6"></img>
                </picture>
                Back
            </button>
        </div>
    )
}

export default ToLastPage;