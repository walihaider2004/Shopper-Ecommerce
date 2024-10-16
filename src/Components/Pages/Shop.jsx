import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../Popular/Popular'
import Offer from '../Offers/Offer'
import NewCollection from '../NewCollection/NewCollection'
import NewsLatter from '../NewsLatter/NewsLatter'
// import RelatedProduct from '../RelatedProduct/RelatedProduct'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollection/>
      <NewsLatter/>
      {/* <RelatedProduct/> */}
    </div>
  )
}

export default Shop
