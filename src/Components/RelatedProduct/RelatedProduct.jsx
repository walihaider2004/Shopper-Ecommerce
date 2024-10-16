import React from 'react'
import Relatedata from './RelateData'
import Items from '../Items/Items'
import './RelatedProduct.css'


const RelatedProduct = () => {
  return (
    <>
      <div className='relatedproduct'>
        <h1>Related Product</h1>
        <hr/>
        <div className="relatedproduct-items">
            {Relatedata.map((items,i)=>{
                return <Items
                key={i}
                id={items.id}
                name={items.name}
                image={items.image}
                new_price={items.new_price}
                old_price={items.old_price}
                />
            })}
        </div>
      </div>
    </>
  )
}

export default RelatedProduct
