import React from 'react'



const DisplayProduct =(props)=>{
const {product}=props;
  return (
        
    <>
     <div>
        <img src="kids_bner.png" alt="" />
        <h1>{product.name}</h1>
      
     </div>
    </>
  )
}

export default DisplayProduct
