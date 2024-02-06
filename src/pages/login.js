import React from 'react'
import { github, google } from '../asset/asset'
import {GoogleAuthProvider, getAuth, signInWithPopup,signOut} from 'firebase/auth'
import { ToastContainer,toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { ADDUSER, REMOVEUSER } from '../redux/reducer';
import { useNavigate } from 'react-router-dom';


function Login() {

  const dispatch = useDispatch();

  const auth = getAuth()
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  function googleLogin(e)
  {
      e.preventDefault()
      signInWithPopup(auth,provider).then((result)=>{
        const user = result.user
        dispatch(ADDUSER({
          _id: user.uid,
          name: user.displayName,
          email: user.email,
          image: user.photoURL
        }))
          setTimeout(()=>{
            navigate('/')
          },1500)
      }).catch((error)=>{
        console.log(error);
      })
  }
  function googleLogout()
  {
      signOut(auth).then(()=>{
        toast.success("Logout Successfully");

        dispatch(REMOVEUSER());
        
      }).catch((error)=>{
        console.log(error)
      })
  }
  return (
    <div className='w-full flex items-center justify-center gap-10 flex-col py-20'>
        <div className='w-full flex justify-center gap-4 items-center '>
          <div className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2
           hover:border-blue-400 cursor-pointer duration-300'>
          <img src={google} alt="googleImg" className='w-6' onClick={googleLogin} />
          <span className='text-sm text-gray-900'>Sing In with Google</span>
          </div>
          <button className='bg-black text-white text-base py-2 px-6 tracking-wide rounded-md
           hover:bg-gray-500 duration-300' onClick={googleLogout}>Sign Out</button>
        </div>
        <div className='w-full flex justify-center gap-4 items-center '>
          <div className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2
           hover:border-blue-400 cursor-pointer duration-300'>
          <img src={github} alt="GitImg" className='w-6' />
          <span className='text-sm text-gray-900'>Sing In with GitHub</span>
          </div>
          <button className='bg-black text-white text-base py-2 px-6 tracking-wide rounded-md hover:bg-gray-500 duration-300'>Sign Out</button>

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

export default Login
