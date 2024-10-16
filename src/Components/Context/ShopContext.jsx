import React, { createContext, useState} from "react";
import Allproduct from "./../Assets/Allproduct";
// import { IoConstructSharp } from "react-icons/io5";

export const ShopContext=createContext(null);
const getDefaultCart=()=>{
    let cart={};
for(let index=0; index < Allproduct.length+1; index++ ){
    cart[index]=0;
}
return cart;
}

const ShopContextProvider=(props)=>{
    const [cartItems,setCartItems]=useState(getDefaultCart());
    const addToCart=(itemsId)=>{
        setCartItems((prev)=>(
         {...prev,[itemsId]:prev[itemsId+1]}
        ));
        console.log(cartItems);
        }
        const removFromCart=(itemsId)=>{
            setCartItems((prev)=>(
             {...prev,[itemsId]:prev[itemsId-1]}
            ))
            }

    const contextValue={Allproduct,cartItems,addToCart,removFromCart}
  
  
   
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;