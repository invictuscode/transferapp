import React from 'react'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Transferlogo from '../Pages/Transferlogo';
import Logo from '../Pages/logo.png'
function Navbar() {

  const navigate = useNavigate();

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
    <div  className="w-100 mt-4 d-flex justify-content-end container">
     



    <h4 onClick={logout} className='logout me-2'>Logout</h4>

    <i className="fi h4 fi-rr-sign-out-alt"></i>
  </div>
  )
}

export default Navbar