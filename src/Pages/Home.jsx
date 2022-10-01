import React from 'react'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Home() {
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log('logout')

      })
      .catch(() => {
        console.log('error')
      })
  }
  return (
    <div className='container'>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
      <div onClick={logout} className=" logout w-100 mt-4 d-flex justify-content-end">
        <h6 className='text-white me-2'>Logout</h6>

        <i className="fi h4 fi-rr-sign-out-alt text-white"></i>
      </div>
      <h1 className='text-white'>Welcome</h1>

    </div>
  )
}

export default Home