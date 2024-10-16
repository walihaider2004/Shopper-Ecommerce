import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import Breadcrum from '../Breadcrum/Breadcrum';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import Discription from '../Discription/Discription';
import RelatedProduct from '../RelatedProduct/RelatedProduct';
// import DisplayProduct from '../DisplayProduct/DisplayProduct';


const Product = () => {
  const {Allproduct}=useContext(ShopContext);
  const {productId} =useParams();
  const product=Allproduct.find((e)=>e.id === Number(productId));
  return (
    <>
     <div>
  <Breadcrum product={product}/>
  <ProductDisplay product={product}/>
  <Discription/>
  <RelatedProduct/>
  
    </div> 
    </>
  )
}

export default Product
