
import React,{useEffect, useState} from 'react'
import { getAuth, updateProfile } from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';
import Card from '../Components/Card';
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import Navbar from '../Components/Navbar'
import {Link} from 'react-router-dom'

function Home() {

  const auth = getAuth();
  const user = auth.currentUser;


  
  const hospitalname = user.displayName;


  
  const [patientdata, setpatientdata]=useState([])

  console.log(hospitalname)


  return (





    <>


      <Navbar />

      <div className="container d-flex text-white">
        <div className="left_home w-65">
          <h2>Welcome, {hospitalname} </h2>
        </div>


        <div className="right_home w-75 containcard d-flex flex-column justify-content-center pt-3">
    <div className="containercard">
     <button className="w-100"><Link to='/viewall' className="h-100 rounded speciallink">See all details of a patient</Link></button>
    
       <Card/>
 
    </div>


  
          
        </div>
      </div>

    </>

  )
}

export default Home;