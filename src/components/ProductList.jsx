import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './ProductList.css';
import products from '../products';



const ProductList = (props) => {
    const [cart, setCart] = useState([]);

    
    const addCart = (product) => {

        const newCart = [product, ...cart];
        setCart(newCart);
    }
console.log(cart)

    return (
        <div>
           
            
            <div className="container">
                <div className="prod">
                    <h1>Our <strong className="text-blue">Products</strong> </h1>
                </div>
            </div>
            <div className="container">
                <div className="row align-items-start">

                    {products.map((product) => (
                        <div className="col-3 align-items-center" key={product.id}>
                            <div className="img_product">
                                <Link to={"/details/" + product.id}>
                                    <img src={product.image} alt={product.name} />
                                </Link>
                            </div>
                            <div className="phone_details">
                                <h4>{product.name}</h4>
                                <h4>{product.cost}</h4>
                            <Link to="/cart">
                                <button className="btn btn-cart" onClick={() => addCart(product)}>Add to Cart</button>
                            </Link>
                        
                            </div>
                        </div>
                    ))}

                </div>


            </div>




        </div>
    )
}

export default ProductList
