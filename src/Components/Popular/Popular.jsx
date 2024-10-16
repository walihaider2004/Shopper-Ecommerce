import React from 'react'
import ProductData from '../Data/ProductData'
import Items from '../Items/Items'
import './Popular.css'

const Popular = () => {
  return (
    <div className='popular'>
      <h1>Popular in Women</h1>
      <hr />
      <div className="popular-item">
        {
        ProductData.map((items,i)=>{
        return <Items
        key={i}
        id={items.id}
        name={items.name}
        image={items.image}
        new_price={items.new_price}
        old_price={items.old_price}
        />
        })
        }
      </div>
    </div>
  )
}

export default Popular
