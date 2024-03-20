import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Header'

import DetailCourses from '../Components/DetailCourses'
import Home from '../Components/Home'
import AboutUs from '../Components/AboutUs/AboutUs'
import Footer from '../Components/Footer/Footer'
import ProfilEdit from '../Components/ProfileEdit/ProfilEdit'
import MyLearning from '../Components/MyLearning/MyLearning'
import Login from '../Components/Login/login'
import Register from '../Components/Register/register'
import CDDetails from '../Components/courseDetails/courseDetails.js'
import AllCourses from '../Components/AllCourses/AllCourses.js'
import ShopingCart from '../Components/Cart/ShopingCart.js'
import CartCheckout from '../Components/Checkout/Cart.jsx'
import ScrollToTop from '../Components/ScrollToTop.js'



const Router = () => {
    return (

        <BrowserRouter >
            <ScrollToTop />
            <div className='h-20'>

                <Navbar />
            </div>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/detailcourse/:slug' element={<DetailCourses />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/profile' element={<ProfilEdit />} />
                <Route path='/learning' element={<MyLearning />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/cart' element={< ShopingCart />} />
                <Route path='/course' element={<AllCourses />} />
                <Route path='/course/:slug' element={<CDDetails />} />
                <Route path='/checkout' element={<CartCheckout />} />
            </Routes>
            <Footer />

        </BrowserRouter >

    )
}

export default Router