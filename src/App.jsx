
import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Components/Pages/Shop';
import ShopCatgory from './Components/Pages/ShopCatgory';
import Product from './Components/Pages/Product';
import LoginSignup from './Components/Pages/LoginSignup';
import Cart from './Components/Pages/Cart';
// import men_banner from './Components/Assets/men_baner';
// import women_banner from './Components/Assets/women_banner';
// import kids_banner from './Components/Assets/Kids_banner';
import man_ban from './Components/Assets/menban.png'
import woman_ban from './Components/Assets/womenban.png'
import kid_ban from './Components/Assets/kidsban.png'



function App() {
  return (
    <div className="App">
     <BrowserRouter>
         <Nav/>
         <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/men' element={<ShopCatgory banner={man_ban} category="men"/>}/>
          <Route path='/women' element={<ShopCatgory banner={woman_ban} category="women"/>}/>
          <Route path='/kid' element={<ShopCatgory banner={kid_ban} category="kid"/>}/>
           <Route path='/product' element={<Product/>}> 
             <Route path=':productId' element={<Product/>}/>
           </Route>
           <Route path='/cart' element={<Cart/>}/>
           <Route path='/login' element={<LoginSignup/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
