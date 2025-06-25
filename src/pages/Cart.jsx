import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import usefetch from "../custom-hooks/Usefetch";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearCart, decreaseQuantity } from  "../component/cartSlice";

function CartPage(){

    const { cartItems, totalQuantity, totalAmount } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    console.log(cartItems);
    return (

        
         <div className="cart-container">
        <h1>Your Shopping Cart</h1>
    <div className="cart-header">
      <div>Product</div>
      <div>Price</div>
      <div>Quantity</div>
      <div>Total</div>
      <div>Action</div>
    </div>
     {cartItems.map(item => (
              <div className="cart-item" key={item.id}>
                {item.name} 
                 <div> {item.price} </div>
                  <div className="quantity-controls">
                    <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(addToCart({ id: item.id, name: item.title, price: item.price }))}>+</button>
                </div>
                <div>{item.quantity*item.price}</div>
                <div><button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>X</button></div>
              </div>
            ))}
    {/* <div className="cart-item">


        
      <div>
        <img src="https://via.placeholder.com/60" alt="Product" />
        Product Name
      </div>
      <div>₹500</div>
      <div className="quantity-controls">
        <button>-</button>
        <span>2</span>
        <button>+</button>
      </div>
      <div>₹1000</div>
      <div><button className="remove-btn">X</button></div>
    </div> */}

    <div className="cart-total">
      Total Amount:{totalAmount}
    </div>

    <button className="checkout-btn">Proceed to Checkout</button>
  </div>
    )
}


export default CartPage;