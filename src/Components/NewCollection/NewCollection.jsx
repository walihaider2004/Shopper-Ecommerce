import React from 'react'
import './NewCollection.css'
import Items from '../Items/Items'
import New_Coolection from './New_Coolection'

const NewCollection = () => {
  return (
    <div className='collection'>
      <h1>New Collection</h1>
      <hr />
      <div className="Collection-items">
      {
        New_Coolection.map((items,i)=>{
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

export default NewCollection
