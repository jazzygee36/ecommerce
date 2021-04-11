import React from 'react';
import { withRouter } from "react-router-dom";
import products from '../products';
import './Details.css';
import { Link } from "react-router-dom";


const Details = ({ match }) => {
    const product = products.find(product => product.id === Number(match.params.id));

    if (!product) return <p>Product not found</p>;

    console.log({ product })

    return (
        <div>
          
            <div className="container">
                <div className="products_title">
                    <h1>{product.name}</h1>
                </div>
                <div className="row details__id">

                    <div className="col-6">
                        <img src={product.image} alt={product.name}  width="300px"/>
                    </div>

                    <div className="col-6 description">
                       <h2>Model: {product.name}</h2>
                       <h4><i><strong> MADE BY: APPLE </strong></i></h4>
                        <h5>Price : {product.cost}</h5>
                       <h6>Some Info About Product</h6> <p>{product.description}</p>
                        <Link to ="/productlist">
                            <button className="btn primary-outline"> Back To Products</button>
                        </Link>
                        <Link to ="/cart">
                            <button className="btn secondary-outline"> Add To Cart</button>
                        </Link>
                        

                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Details)
