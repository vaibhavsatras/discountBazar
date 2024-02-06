import React from 'react'
import { logo, payment } from '../asset/asset'
import {ImGithub} from 'react-icons/im'
import {FaFacebook, FaHome, FaInstagram, FaTwitter, FaYoutube }from 'react-icons/fa';
import {BsPaypal, BsPersonFill} from 'react-icons/bs';
import {MdLocationOn} from 'react-icons/md'
function Footer() {
  return (
    <div className='bg-black text-[#949494] py-20 font-titleFont'>
        <div className='max-w-screen-xl mx-auto grid grid-cols-4 gap-10'>
            <div className='flex flex-col gap-7'>
                <img src={logo} alt="img" className='w-32 mx-11' />
                <p className='text-white text-sm tracking-wide mx-11'>@ Vaibhav_Satras.com</p>
                <img src={payment} alt="img" className='w-64 mx-4' />
                <div className='flex gap-5 mx-9'>
                        <ImGithub className='text-xl hover:text-white duration-300 cursor-pointer'/>
                        <FaYoutube className='text-xl hover:text-white duration-300 cursor-pointer'/>
                        <FaFacebook className='text-xl hover:text-white duration-300 cursor-pointer'/>
                        <FaTwitter className='text-xl hover:text-white duration-300 cursor-pointer'/>
                        <FaInstagram className='text-xl hover:text-white duration-300 cursor-pointer'/>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
            <h4 className='text-lg font-semibold text-white'>Locate Us</h4>
                <p>Morevasti, Chikhali,Pune-411062.</p>
                <p>Mobile: +91 9765592502</p>
                <p>Email: vaibhavsatras5@gmail.com</p>
            </div>
            <div className='flex flex-col gap-3'>
                <h3 className='text-lg font-semibold text-white mx-1'>Profile</h3>
                <p className='flex gap-2 items-center hover:text-white duration-300 cursor-pointer'> <span><BsPersonFill /></span> My Acoount</p>
                <p className='flex gap-2 items-center hover:text-white duration-300 cursor-pointer'> <span><BsPaypal /></span> Check Out</p>
                <p className='flex gap-2 items-center hover:text-white duration-300 cursor-pointer'> <span><FaHome /></span> Order Tracking</p>
                <p className='flex gap-2 items-center hover:text-white duration-300 cursor-pointer'> <span><MdLocationOn /></span>Help & Support</p>
            </div>
            <div className='flex justify-center flex-col'>
                <input type="text" className='bg-transparent border px-4 py-2 text-sm' placeholder='Enter Email'/>
                <button className='text-sma border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Footer
