import React from 'react'
import './NewsLatter.css'

const NewsLatter = () => {
  return (
    <div className='newslater'>
      <h1>Get Exclusive Offer ON Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
       <div>
       <input type="email" placeholder='Your email' />
       <button>Subscribe</button>
       </div>

    </div>
  )
}

export default NewsLatter
