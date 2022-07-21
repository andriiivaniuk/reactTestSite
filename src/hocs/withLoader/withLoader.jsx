
import React from "react";

import Loader from "../../components/Loader/Loader";


const withLoader = (Component) => {
    const WithLoader = ({loading, ...props}) => {
        if(loading) {
            return <Loader></Loader>
        }

        return <Component {...props}></Component>;
    };

    return WithLoader;
};

export default withLoader;