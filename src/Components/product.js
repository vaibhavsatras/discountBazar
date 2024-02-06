import React, { useEffect, useState } from 'react'
import { useLocation} from 'react-router-dom'
import {MdOutlineStar} from 'react-icons/md'
import { ADD } from '../redux/reducer'
import {useDispatch} from 'react-redux'
import { ToastContainer,toast } from 'react-toastify';
function Product() {
  
  const[qty,setQty] = useState(0);
  const[details,setDetails] = useState([]);
  const location  = useLocation()
  const data = location.state.item;
    
  const dispatch = useDispatch()

    useEffect(()=>{

      setDetails(data);

    },[])


  return (
    <div>
            <div className='max-w-screen-xl mx-32 my-10 flex gap-10'>
              <div className='w-2/5 relative'>
                <img src={details.image} alt="img" className='w-[350px] h-[450px] object-cover' />
                <div className='absolute top-2 right-20 mx-2'>
                  {
                    details.isNew ? <p className='bg-black text-white font-semibold font-titleFont px-8 py-1'>
                      Sale
                    </p>: ''
                  }
                </div>
              </div>
                <div className='w-2/5  flex justify-center flex-col gap-6'>
                  <div>
                    <h2 className='text-4xl font-semibold'>{details.title}</h2>
                    <div className='flex items-center gap-5 mt-3'>
                      <p className='line-through font-base text-gray-500'>Rs. {details.oldPrice}.00</p>
                      <p>Rs. {details.price}.00</p>
                    </div>
                  </div>
                  <div className='flex gap-2 items-center text-base'>
                  <div className='flex gap-2'>
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  </div>
                  <p className='text-sm text-gray-500'>(1 Customer Reveiew)</p> 
                  </div>
                  <p className='text-sm text-gray-500'>{details.description}</p>
                  <div className='flex gap-5'>
                    <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
                      <p className='text-sm'>Quantity</p>
                      <div className='flex items-center gap-5 text-sm font-semibold'>
                      <button className='border h-5 font-normal text-lg flex items-center justify-center px-2 
                      py-3 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'onClick={()=>setQty(qty+1)} >+</button>
                      <span>{qty}</span>
                      <button className='border h-5 font-normal text-lg flex items-center justify-center 
                      px-2 py-3 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black' onClick={()=>qty === 0 ? 1 : setQty(qty-1)}>-</button>
                      </div>
                    </div>
                  <button className='bg-black text-white py-3 px-6 active:bg-gray-800 w-[300px] hover:text-gray-100'type='button' onClick={()=>dispatch(ADD({

                          _id: details._id,
                          title: details.title,
                          image:details.image,
                          price: details.price,
                          quantity: qty,
                          description: details.description
                          }))&& toast.success(`${details.title} is Added in Cart`)
                          }>Add To Cart</button>
                  </div>
                  <p className='text-base text-gray-500'>Catageory : <span className='font-medium capitalize'>{details.category}</span></p>
                </div>
            </div>
            <ToastContainer
            position="top-left"
            autoClose={2000}
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

export default Product
