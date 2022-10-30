
import React,{useEffect, useState} from 'react'
import { getAuth, updateProfile } from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';
import Card from '../Components/Card';
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import Navbar from '../Components/Navbar'
import firebase from '../firebase'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toasterror, toastsuccess } from '../Components/Toaster';
import Transferlogo from './Transferlogo';
import Transfer from './Transfer';

function Home() {

  const auth = getAuth();
  const user = auth.currentUser;


  
  const hospitalname = user.displayName;
  const navigate = useNavigate();

  const [loader, setloader] = useState(true);
  const [data, setdata] = useState([]);
  const ref = firebase.firestore().collection("transferapps")
  function getData() {
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setdata(items)
      setloader(false)
    })
  }



  console.log(hospitalname)

  localStorage.setItem('hospitalname', hospitalname);


  

  return (





    <div className="">

<Transferlogo/>
      <Navbar />
      <div className="container">
      
      <div>
      

          <button className="btn btn-warning w-75 h-25" onClick={()=>{
        navigate("/transfer")
      }}>
            <h1>+</h1>
            Create a New Transfer Request
            </button>
            </div>    

            <div>  
            <button className="btn btn-warning w-75 h-25 mt-3" onClick={()=>{
              navigate("/chat-home/1")
            }}>
              <h1> <i className="fi fi-rr-comments"></i></h1>
             Chat
            </button>
</div> 
<div>
  
</div>
            <button className="btn btn-warning w-75 h-25 mt-3" onClick={()=>{
              navigate("/viewtransfers")
            }}>
              <h1> <i class="fi fi-rr-search-alt"></i></h1>
             View Transfer Requests
            </button>
            
            
            <button className="btn btn-warning w-75 h-25 mt-3" onClick={()=>{
              navigate("/acc")
            }}>
              <h1>✔</h1>
             View Accepted Transfers
            </button>

                 
            <button className="btn btn-warning w-75 h-25 mt-3 mb-5" onClick={()=>{
              navigate("/rej")
            }}>
              <h1>❌</h1>
             View Rejected Transfers
            </button>
            
            
            


     


  
          
       

    </div>
    </div>
  )
}

export default Home;