import React, { useContext } from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";
import './ProductDisplay.css'
import { ShopContext } from '../Context/ShopContext';


// import Discription from '../Discription/Discription';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart}=useContext(ShopContext)

    console.log(product.image)
    
  
    return (
        <>
            <div className='ProductDisplay'>
                <div className='Display-left'>
                    <div className="Display-img-list">
    
                        {/* <img src={product.image} alt="img2"/> */}
                        <img src={product.image} alt="img"/>
                        <img src={product.image} alt="img"/>
                        <img src={product.image} alt="img"/>
                        <img src={product.image} alt="img"/>
                    </div>
                    <div className="Display-img">
                        <img className='Display-img-main ' src={product.image} alt="" />
                    </div>
                </div>

                <div className='Display-right'>
                    <h1>{product.name}</h1>
                    <div className='Display-right-star'>
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                      <p>(122)</p>
                    </div>
                     <div className="Display-right-prices">
                        <div className="Display-right-old-prices">${product.old_price}</div>
                        <div className="Display-right-new-prices">${product.new_price}</div>
                     </div>
                     <div className="Display-right-des">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Eligendi voluptatibus aperiam omnis error debitis, accusamus magni vel, rem, nam impedit facere iure quos atque suscipit nemo at consequatur voluptatum dolore.</p>
                     </div>
                     <div className="Display-right-size">
                        <h1>Slect Size</h1>
                        <div className="Display-right-sizes">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                     </div>
                     <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
                     <p className='Display-right-category'> <span>Category :</span> Women ,T Shirt ,Crop top </p>
                     <p className='Display-right-category'> <span>Tags :</span>Modern ,Latest</p>
                </div>
              
            </div>
        </>
    )
}

export default ProductDisplay
