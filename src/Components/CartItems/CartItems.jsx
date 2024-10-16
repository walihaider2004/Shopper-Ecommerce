import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { IoRemoveCircle } from "react-icons/io5";
import './CartItems.css'

const CartItems = () => {
    const {Allproduct, cartItems, removFromCart} = useContext(ShopContext);
    console.log(Allproduct);
    return (
      
        <div className='cartitems'>
            <div className='cartitems-format-main'>
              <p>Products</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <hr/>
          
           {
            Allproduct.map((e)=>{
           if(cartItems[e.id]>0)
        
            { 
                return  <div className='cartitems-formate cartitems-format-main'>
                <img src={e.image} alt="" className='cartitems-product-icon'/>
                  <p>{e.name}</p>
                  <p> ${e.new_price}</p>
                  <button className='cartitems-qauntity'>{cartItems[e.id]}</button>
                  <p> ${e.new_price*cartItems[e.id]}</p>
                  <IoRemoveCircle className='cartitems-remove-icon' onClick={()=>{removFromCart(e.id)}}/>
                  <hr/>
                 </div>
                   

            }
            return null;
            })}
            <div className='cartitems-down'>
                <div className='cartitems-total'>
             <h1>cart Total</h1>
                </div>
                <div className='cartitems-total-item'>
                   <p>Subtotal</p>
                   <p>${0}</p>
                </div>
                <hr />
                <div className='cartitems-total-item'>
                    <p>Shipping fee</p>
                    <p>Free</p>
                    </div>
             <hr />
             <div className='cartitems-total-item'>
                <h3>TOtal</h3>
                <h3>${0}</h3>
             </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <div className='cartitems-promocode'>
                <p>If you have a promocode ENter it Here</p>
                  <div className='cartitems-promobox'>
                <input type="text" name="" id="" />
                  </div>
            </div>
        </div>
    )
}

export default CartItems
