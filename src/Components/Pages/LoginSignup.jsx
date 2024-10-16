import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <>
      <div className='LoginSignup'>
     <div className='LoginSignup-Container'>
     <h1>Sign Up </h1>
     <div className='LoginSignup-fields'>
     <input type='text' placeholder='Your Name'/>
     <input type='email' placeholder='Your Email'/>
     <input type='password' placeholder='Your Password'/>
     </div>
       <button>Continue</button>
       <p className='LoginSignup-login'>Already have an account ? <span>Login</span></p>
       <div className='LoginSignup-agree'>
        <input type="Checkbox" id='' />
        <p>By Continueing I am agreed to the use and terms of use & privecy policy</p>
       </div>
     </div>
      </div> 
    </>
  )
}

export default LoginSignup
