import React from "react";
import {connect} from "react-redux";

import {Route, Switch} from "react-router-dom";
import {HomePage,CartPage} from '../pages'
import ShopHeader from "../shop-header";

import './App.css'



const App = ({countTotal,orderTotal}) => {

    return (
        <main role='main' className='container'>
            <ShopHeader numItems={countTotal} total={orderTotal}/>
            <Switch>
                <Route
                    path='/'
                    component={HomePage}
                    exact />
                <Route path='/cart'
                        component={CartPage}
                       exact />
            </Switch>
        </main>
    )
}

const mapStateToProps = ({shoppingCart}) => {
    let orderTotal = 0;
    shoppingCart.cartItems.forEach(({ total }) => orderTotal += total);
    let countTotal = 0;
    shoppingCart.cartItems.forEach(({ count }) => countTotal += count)

    return {
        countTotal,
        orderTotal,
    };
};


export default connect(mapStateToProps)(App)

