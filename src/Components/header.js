import React,{useState} from 'react'
import { cart, cartImg, logo } from '../asset/asset';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa'
const Header = () => {

    const [open,setOpen] = useState(false)

    const data = useSelector((state)=>{
        return state.cart.Data
        
    })

    const userinfo = useSelector((state)=>{
        return state.cart.userInfo
    })
    console.log(userinfo)
    // console.log(data)

  return (
    <div className='w-full h-16 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50'>
            
            <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
                <div>
                    <img src={logo} alt="img" className='w-28' />
                </div>
            <div className='flex gap-6 items-center me-8'>
                <div className='hidden lg:block'>
                <ul className='flex gap-8 items-center'>
                    <Link to={"/"}><li className='text-base text-black font-bold hover:text-orange-900
                     hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-titleFont'>Home</li></Link>
                    <li className='text-base text-black font-bold hover:text-orange-900 
                    hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-titleFont'>Pages</li>
                    <li className='text-base text-black font-bold hover:text-orange-900 
                    hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-titleFont'>Shop</li>
                    <li className='text-base text-black font-bold hover:text-orange-900 
                    hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-titleFont'>Element</li>
                    <li className='text-base text-black font-bold hover:text-orange-900 
                    hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-titleFont'>Blog</li>
                </ul>
                </div>
                <div className='flex lg:hidden mr-64'>
                    <button onClick={()=>setOpen(!open)}>
                        <span className='sr-only'>Open Main Menu</span>
                        {
                            open === true ? <FaTimes className='text-2xl ms-10'/>:<FaBars className='text-2xl' />
                        }
                    </button>
                </div>
                <Link to={'/cart'}>
                <div className='relative'>
                <img className=' w-16 xs:w-18 md:w-16 lg:w-8 cursor-pointer rounded-full' src={cart} alt="cartImg" />
                <span className=' cursor-pointer absolute w-12 justify-center top-4 xs:top-4 lg:top-2 lg:w-8 xs:left-2 lg:left-0  md:left-2 md:top-6 md:text-xl left-0.5 lg:text-sm  text-2xl xs:2xl flex items-center 
                font-titleFont'>{data.length}</span>
                </div>
                </Link>
                <div className='flex justify-between items-center gap-4'>
                <Link to={'/login'}><img className=' w-10 cursor-pointer rounded-full' src={userinfo ? userinfo.image : cartImg} alt="cartImg" /></Link>
                {
                    userinfo && <p className=' text-xl text-center md:text-left md:text-sm font-titleFont underline underline-offset-2'>{userinfo.name}</p>
                }
                </div>
            </div>

            </div>
            {
                open === true ? 
                <div className='md:hidden duration-500'>
                    <div className='ox-2 pt-2 pb-3 space-y-1 sm:px-3'>

                    <div className='block absolute bg-white top-14 w-[50%] left-0 h-72'>
                    <ul className='flex gap-8 items-center flex-col mt-0'>
                    <Link to={"/"}><li className='text-base text-black font-bold hover:text-orange-900
                     hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-titleFont'>Home</li></Link>
                    <li className='text-base text-black font-bold hover:text-orange-900 
                    hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-titleFont'>Pages</li>
                    <li className='text-base text-black font-bold hover:text-orange-900 
                    hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-titleFont'>Shop</li>
                    <li className='text-base text-black font-bold hover:text-orange-900 
                    hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-titleFont'>Element</li>
                    <li className='text-base text-black font-bold hover:text-orange-900 
                    hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-titleFont'>Blog</li>
                </ul>
                </div>


                    </div>

                </div>: null
            }
    </div>
)
}

export default Header;
    