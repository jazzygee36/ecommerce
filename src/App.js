import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch, Link  } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";
import Details from "./components/Details.jsx";
import Default from "./components/Default.jsx";



const App = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route  exact path="/" component={ProductList}/>;
        <Route   path="/details/:id" component={Details} />;
        <Route   path="/cart" component={Cart} />;
        <Route  path="/default" component={Default} />


      </Switch>
    </Router>
  )
}

export default App
