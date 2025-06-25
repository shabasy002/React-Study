import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import usefetch from "../custom-hooks/Usefetch";
import { useParams, Link } from "react-router-dom";
import Modal from "../component/Modal";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from  "../component/cartSlice";


function ProductDetail(){
    const { cartItems, totalQuantity, totalAmount } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const { id } = useParams(); // 🔑 Get the ID from the route
    const { data, loading, error } = usefetch(`https://dummyjson.com/products/${id}`);
    const [img, setImg]=useState(null);
    const [product, setProduct]=useState([])
    const [showModal, setShowModal] = useState(false);

    useEffect(()=>{
       if(data){
        setProduct(data);
        setImg(product.thumbnail);
       }
    },[data])
    //console.log(img);
      const itemToAdd = { id: product.id, name: product.title, price: product.price };

    return(
        <div className="detail-wrap">
            
        
        <>
            <div className="thumbnails">
                <Link to={`/ProductList/`}>Back to product listing</Link>
                   {product.images &&
                    product.images.map((p, index)=>{
                        //console.log(index);
                        return (
                            <div className="thumb" key={index}>
                                <img src = {p} width="120" onMouseOver={(e)=>{
                                    setImg(e.target.src);
                                }}/>
                            </div>
                        )
                    })

                   }
            </div>
            <div className="image" onClick={() => setShowModal(true)}>
                <img src={img} alt={product.title} width="300" />
                <h3>{product.title}</h3>
            </div>

            <button onClick={() => dispatch(addToCart(itemToAdd))}>Add Laptop</button>
            <button onClick={() => dispatch(clearCart())}>Clear Cart</button>

            <h4>Total Quantity: {totalQuantity}</h4>
            <h4>Total Amount: ₹{totalAmount}</h4>

      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ₹{item.price} × {item.quantity}
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </li>
        ))}
      </ul>
        </>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
         <img src={img} alt={product.title} />
      </Modal>
            
        </div>

        
    )
}

export default ProductDetail;