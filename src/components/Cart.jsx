import React,{useState} from 'react'

const Cart = () => {
    const [cart] = useState([]);

    // const addCart = (product) => {
        
    //     const newCart = [product, ...cart];
    //     setCart(newCart);
    // }

    return (
        <div>
            <h1 style={{marginRight:'1.5rem', marginLeft:'1.5rem', marginTop:'4rem'}}>Add to cart is under construction</h1>
            {/* <button onClick={()=>addCart(product)}>Add to cart</button> */}
            
        </div>
    )
}

export default Cart
