import React, { useState } from 'react'
import { BsCart } from "react-icons/bs";
import {Link} from 'react-router-dom'


const Nav = () => {
  const [menu,setMenu]=useState("Shop")
  return (
    <div className='flex justify-around p-6 shadow-[0 1px 3px -2px black]'>
      <div className='flex items-center gap-4'>
       <img className='w-16	' src="imges/shoping.bag.jpeg" alt=""/>
       <p className='text-[#171717] text-3xl font-semibold'>Shopper</p>
      </div>
        <ul className='flex items-center gap-16 text-[#626262] text-xl font-semibold'>
            <Link to="/" onClick={()=>{setMenu("Shop")}}>Shop {menu==="Shop" ?<hr className='w-[85%] h-1 bg-[#FF4141]'/>:<></>}</Link>
            <Link to="/men" onClick={()=>{setMenu("mens")}}>Men  {menu==="mens" ?<hr className='w-[85%] h-1 bg-[#FF4141]'/>:<></>}</Link>
            <Link to="/women" onClick={()=>{setMenu("womens")}}>Women  {menu==="womens" ?<hr className='w-[85%] h-1 bg-[#FF4141]'/>:<></>}</Link>
            <Link to="/kid" onClick={()=>{setMenu("kids")}}>Kids  {menu==="kids" ?<hr className='w-[85%] h-1 bg-[#FF4141]'/>:<></>}</Link>
        </ul>
        <div className='flex items-center gap-14'>
        <Link to="login"><button className='w-32	 h-10 border-4	 border-solid border-inherit rounded-3xl text-xl font-semibold active:bg-violet-700'>Login</button></Link>
          <Link to="cart"><BsCart size={30}/></Link>
          <div className='w-[22px] h-[22px] flex justify-center items-center mt-[-35px] ml-[-65px] bg-red-900 rounded-xl  text-white '>0</div>
        </div>
    </div>
  )
}

export default Nav
