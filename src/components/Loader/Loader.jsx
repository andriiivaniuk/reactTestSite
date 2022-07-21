
import React from "react";
import Spinner from "../Spinner/Spinner";

import './Loader.css';

const Loader = () => {
    return <div className="spinner_holder">
        <Spinner></Spinner>
    </div>
}

export default Loader;