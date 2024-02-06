import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import CartItem from './cartItem'
import { toast, ToastContainer } from 'react-toastify'
import StripeCheckout from 'react-stripe-checkout';
import { payment } from '../asset/asset';

function Cart() {

  const productData = useSelector((state)=>{
    return state.cart.Data
  })
  const [totalAmt,setTotalAmt] = useState('');
  const userInfo = useSelector((state)=>{
    return state.cart.userInfo
  })
  
  const[payNow,setPayNow] = useState(false)

  useEffect(()=>{

    let price = 0;

    productData.map((item)=>{

      price += item.price * item.quantity
      return price
    })
    setTotalAmt(price)
  },[productData])


  function proceedCheckout()
  {
      if(userInfo)
      {
          setPayNow(true)
      }
      else
      {
        toast.error('Please Sign In to Check Out');
      }
  }

  return (
    <div>
            <img src="https://i.pinimg.com/originals/f6/80/3f/f6803fd154f40b372c24bae4c37f3bb3.jpg" alt="img" className='w-full h-60 object-cover'/> 
            
              <div className='max-w-screen-xl mx-auto py-20 flex'>
                <CartItem />
                <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
                  <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
                  <h2 className='text-2xl font-medium'>Cart Totals</h2>
                  <p className='flex items-center gap-4 text-base'>
                    Sub Total {" "}
                    <span className='font-titleFont font-bold text-lg'>
                      Rs. {totalAmt}
                    </span>
                  </p>
                  <p className='flex items-center gap-4 text-base'>
                    Shipping {" "}
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, delectus.
                    </span>
                  </p>
                </div>
                <p className='mt-6 fot-titleFont font-semibold flex justify-between'>Total Amont {" "}
                    <span className='text-xl font-bold'>Rs. {totalAmt}.00</span>
                </p>
                <button className='text-base bg-black text-white w-full py-3 mt-6
                 hover:bg-gray-800 duration-300' onClick={proceedCheckout}>Preceed to Checkout</button>
                 {
                  payNow && 
                  <div className='w-full mt-6 flex items-center justify-center'>
                    <StripeCheckout 
                    
                    stripeKey="pk_test_51Ntt69SFAhNdxu2qdwSqQVHgct53admCMvuB2Mv0QfkF0SoDhlae5psXjoZFxkDjcAwlR44PvT2IdoG4VHA1Sbkm00o26kzD2N"
                    name='Discount Bazar'
                    amount={totalAmt * 100}
                    label='Pay To Bazar'
                    description={`Your Payment Amount Is ${totalAmt}`}
                    // token={payment}
                    email={userInfo.email}
                     />
                  </div>
                 }
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

export default Cart
        