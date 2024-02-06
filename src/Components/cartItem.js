import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {MdOutlineClose} from 'react-icons/md'
import {REMOVE, RESET,INCREMENT, DECREMENT } from '../redux/reducer';
import { ToastContainer,toast } from 'react-toastify';
import {HiOutlineArrowLeft} from 'react-icons/hi'
import {Link} from 'react-router-dom'

function CartItem() {
    const data =  useSelector((state)=>{

            return state.cart.Data
          })
        
          const delete_data =  useDispatch();

          const del = (id)=>{
            delete_data(REMOVE(id))
          } 

          const Increment = (d)=>{

              delete_data(INCREMENT(d));
          }
          const Decrement = (d)=>{

            delete_data(DECREMENT(d));
        }
        
  return (
    <div className='w-2/3 pr-10 px-4'>
                <div className='w-full'>
                    <h2 className='font-titleFont text-xl mx-5'>Shopping Cart</h2>
                    
                </div>
                <div>
                  {
                    data.map((item)=>{

                      return (
                      <div key={item._id} className='flex items-center justify-between gap-6 mt-6'>
                          <div className='flex gap-3 items-center'>
                            <MdOutlineClose className='text-xl text-gray-500 hover:text-red-600 cursor-pointer duration-300' onClick={()=>del(item._id)& toast.error(`${item.title} is Deleted from Cart`)} />
                            <img src={item.image} alt="img" className='w-32 h-32 object-cover' />
        
                          </div>
                          <h2 className='w-52'>{item.title}</h2>
                          <p className='w-15'>Rs.{item.price}</p>
                          <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
                      <p className='text-sm'>Quantity</p>
                      <div className='flex items-center gap-5 text-sm font-semibold'>
                      <button type='button' className='border h-5 font-normal text-lg flex items-center justify-center px-2 
                      py-3 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'
                        
                      onClick={()=>Increment(item)}
                      
                      >+</button>

                      <span>{item.quantity}</span>
                      <button className='border h-5 font-normal text-lg flex items-center justify-center 
                      px-2 py-3 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'
                        
                      onClick={()=>Decrement(item)}
                        
                      >-</button>
          
                      </div>
                    </div>
                    <span className='text-center'>Total <br/>Rs.<span> {item.quantity * item.price}.00</span></span>
                      </div>)
                    })
                  }
                </div>
                <button className='bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800
                 duration-300' onClick={()=>delete_data(RESET())& toast.error(`Cart is Empty`)}>Reset Cart</button>

                  <Link to={'/'}>

                      <button className='mt-8 ml-7 items-center flex gap-2 text-gray-400 hover:text-black duration-300'>
                        <span>
                          <HiOutlineArrowLeft />
                        </span>
                        Go Shopping
                      </button>
                  
                  </Link>
                <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='dark'
            />
    </div>
  )
}

export default CartItem
        