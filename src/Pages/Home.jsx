import React from 'react'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, updateProfile } from "firebase/auth";

function Home() {
  const auth = getAuth();
  const user = auth.currentUser;


  
  const hospitalname = user.displayName;
  


  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log('logout')
console.log(hospitalname)
      })
      .catch(() => {
        console.log('error')
      })
      
  }
  return (
    
   
      
      
    
    <div className='container'>
      

      <div onClick={logout} className=" logout w-100 mt-4 d-flex justify-content-end">
        <h6 className='text-white me-2'>Logout</h6>

        <i className="fi h4 fi-rr-sign-out-alt text-white"></i>
      </div>
      <h1 className='text-white'>Welcome, {hospitalname} </h1>

      <div className="actions">
        <button className="btn btn-warning">Create A Transfer Request</button>
        <ul class="list-group mt-5 w-25">
  <li class="list-group-item">Patient 1</li>
  <li class="list-group-item">Patient 2</li>
  <li class="list-group-item">Patient 3</li>
  <li class="list-group-item">Patient 4</li>
  <li class="list-group-item">Patient 5</li>
</ul>
        </div>  
    </div>
    
  )
}

export default Home;