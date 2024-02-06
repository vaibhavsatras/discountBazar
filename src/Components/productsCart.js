import React from 'react'
import  {BsArrowRight} from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { ADD } from '../redux/reducer';
import { ToastContainer,toast } from 'react-toastify';

function ProductsCart({product}) {
  
  const dispatch =  useDispatch();

  const navigate = useNavigate();

  const p_id = product.title

  const id_string = (p_id)=>{

    return String(p_id).toLowerCase().split('').join('')

  }

  const  root_id = id_string(p_id);

  const productDetails = ()=>{

      navigate(`/product/${root_id}`,{
        state:{
          item: product,
        }
      })

  }

  

  return (
    <div className='group relative left-28 md:left-0'>
        <div className='w-[500px] md:w-full h-[500px] md:h-100 cursor-pointer overflow-hidden' onClick={productDetails}>
          <img src={product.image} alt="img" className=' md:w-full w-[600px] h-full object-cover hover:scale-110 duration-500' />
        </div>
        <div className='md:w-full w-[500px] border-[1px] px-1 py-4'>

        <div className='flex justify-between items-center'>
          <div>
            <h2 className='font-titleFont text-base font-bold'>{product.title.substring(0,6)}</h2>
          </div>
        <div className='flex text-base font-bold relative overflow-hidden w-30 justify-end'>
          <div className='transform hover:translate-x-32 transition-transform duration-500 cursor-pointer'>
            <div className='flex gap-2'>
              <p className='line-through text-gray-500 ms-4'>Rs.{product.oldPrice}</p>
              <p>Rs. {product.price}</p>
            </div>
              <p className='absolute z-20 w-[150px] text-gray-500 hover:text-gray-900
               flex items-center gap-2 top-0 transform -translate-x-32 me-4' onClick={()=>dispatch(ADD({

                      _id: product._id,
                      title: product.title,
                      image:product.image,
                      price: product.price,
                      quantity: 1,
                      description: product.description
               })) && toast.success(`${product.title} is Added in Cart`)
               
               }>Add To Cart 
              <span><BsArrowRight /></span>
               </p>
            </div>
          </div>
          </div>
          <div>
            <p>{product.category}</p>
          </div>
          <div className='absolute top-4 right-0 left-[418px] md:left-[302px] lg:left-[210px] w-20 md:top-4 md:right-0'>
            {product.isNew ? <p className='bg-black text-white font-titleFont px-6 py-1'>Sale</p>: ''}
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

export default ProductsCart
