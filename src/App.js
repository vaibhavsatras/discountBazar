
import './App.css';
import Home from './pages/home';
import Header from './Components/header'
import Footer from './Components/footer';
import {Routes,Route,Outlet} from 'react-router-dom'
import Cart from './Components/cart';
import React from 'react';
import Product from './Components/product';
import Login from './pages/login';

function App() {

   

  const Layout = ()=>{

    return(
    <>
      <Header />
      <Outlet />
      <Footer />
    </>)
    
    
  }

  return (
      <>
          <div className='font-bodyFont'>
          <Routes>
            <Route path='/' element={<Layout />} >
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/product/:id' element={<Product />} />
          </Route>
          </Routes>
          </div>
      </>   
  )
}

export default App;
