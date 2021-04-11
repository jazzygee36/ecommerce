import React, { Component } from 'react'
import {  Link} from "react-router-dom";
import logo from "../logo.png";
import Cart from './Cart';
import "./Navbar.css"




export default class Navbar extends Component {
   
    
  
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark  px-sm-5 NavWrapped">
                {/* https://www.iconfinder.com/icons/1243689/call_phone_icon Creative Commons (Attribution 3.0 Unported); https://www.iconfinder.com/Makoto_msk */}
                <Link to="/">
                    <img src={logo}  alt="store" width="40px" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-cente">
                    <li className="nav-item ml-5">
                        <Link to ="/" className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to ='/cart' className="ml-auto">
                    <button className="btn btn-cart"  >({})
                    <span className="mr-3">
                    <i className="fa fa-shopping-cart" aria-hidden="true" />
                    </span>
                        my cart

                    </button>
                </Link>

            </nav>
        )
    }
}
