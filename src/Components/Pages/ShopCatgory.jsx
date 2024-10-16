import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import './CSS/ShopCatgory.css'
import { IoIosArrowDropdown } from "react-icons/io";
import Items from '../Items/Items';
// import Allproduct from '../Assets/All_product';

const ShopCatgory = (props) => {
  const {Allproduct}=useContext(ShopContext)
  return (
    <>
    <div className='Shop-catagory'> 
     <img className='Shop-baner' src={props.banner} alt="" />
     <div className="shopcatgory-indexsort">
      <p>
        <span>Showing 1-12</span> out of 36 products
      </p>
      <div className="shopcategory-sort">
        sort by <IoIosArrowDropdown/>
      </div>
     </div>
     <div className="shopcatrgory-products">
         {Allproduct.map((items,i)=>{
        if(props.category===items.category){
          return <Items
          key={i}
          id={items.id}
          name={items.name}
          image={items.image}
          new_price={items.new_price}
          old_price={items.old_price}
          />
        } else{
          return null;
        }
         })}
     </div>
     <div className='Shop-Explore'>
      Explore More
     </div>
    </div>
    </>
  )
}

export default ShopCatgory
