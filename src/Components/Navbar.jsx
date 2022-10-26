import React from 'react'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'


function Navbar() {


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
    <div  className="  w-100 mt-4 d-flex justify-content-end container">
      <h6 className="logout text-white me-1">Chat</h6>

      <i className="fi fi-rr-comments text-white me-5"></i>

    <h6 onClick={logout} className='logout text-white me-2'>Logout</h6>

    <i className="fi h4 fi-rr-sign-out-alt text-white"></i>
  </div>
  )
}

export default Navbar