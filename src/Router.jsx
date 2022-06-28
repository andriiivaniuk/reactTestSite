import React from "react";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import MultiView from "./components/MultiView/MultiView";
import SingleView from "./components/SingleView/SingleView";
import Basket from "./components/Basket/Basket";

const Router = (props) => {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/products" component={MultiView} />
            <Route exact path="/products/:id" component={SingleView} />
            <Route exact path="/basket/" component={Basket}/>
            <Redirect to="/products"></Redirect>
        </Switch>
    </BrowserRouter>
};

export default Router;