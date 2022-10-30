import React from 'react'
import { useState, useEffect } from 'react'
import firebase from '../firebase'
import { Link } from 'react-router-dom'
import { getAuth, updateProfile } from "firebase/auth";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { auth, db } from "../firebase";
import Transferlogo from './Transferlogo';

 
const medium = {
  backgroundColor: "#ddffff", borderLeft: "5px solid #2196F3"
}

const high = {
  backgroundColor: "#ffcccb", borderLeft: "5px solid #FF0000"
}

const low = {
  backgroundColor: "#b3f5ba", borderLeft: "5px solid #0cc221"
}


function Rej() {
  const ref = firebase.firestore().collection("transferapps")
  const [data, setdata] = useState([]);
  const [loader, setloader] = useState(true);

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
  useEffect(() => {
    getData()
    // console.log(data)
  }, [])
  function editDoc(updatedDoc) {
    ref
      .doc(updatedDoc.id)
      .update(updatedDoc)
      .catch((err) => {
        alert(err)
        console.log(err)
      })
  }


  const auth = getAuth();
  const user = auth.currentUser;




  const hospitalname = localStorage.getItem('hospitalname');

  console.log(hospitalname)
  return (
    <>
    <Transferlogo/>
      {loader === false && (data.map((apps, i) => (
        
        apps.rejected1.includes("rejected") == true ? (

        
          <div key={i} className="card m-2 text-dark shadow rounded " >
            <div key={apps.id}>

            
              
              <h5>{apps.fname} {apps.lname} | Hospital From: {hospitalname}</h5>
              <h6>Hospitals Rejected by: </h6>
              <h6>{apps.rejected1.slice("9")}</h6>
              <h6>{apps.rejected2.slice("9")}</h6>
              <h6>{apps.rejected3.slice("9")}</h6>
              <h6>{apps.rejected4.slice("9")}</h6>
              <h6>{apps.rejected5.slice("9")}</h6>
              <h6>{apps.rejected6.slice("9")}</h6>
              <h6>{apps.rejected7.slice("9")}</h6>
              <h6>Case #: {apps.id}</h6>
              
              <div className="w-100 d-flex justify-content-between">


                <div className='d-flex'>

                  
                  {/* <h5 className='mx-2'> */}
                 
                </div>
              </div>
            </div>
          </div>) : null

      )))
      }


      {/* <h6>{data.Issue} | {data.HospitalName}</h6>
      <p>Lorem ipsum dolor sit amet.</p>
      <div className="w-100 d-flex justify-content-between">
        <button className="h-100 w-50 rounded">Info</button>
        <div className='d-flex'>
          <h5 className='mx-2'> ❌ </h5>
          <h5 className='mx-2'> ✔ </h5>
        </div>
        </div> */}



    </>


  )
}

export default Rej


// CREATE A COLLECTION HOSPITAL INFO
// NAME, ID, ADDRESS, PHONENUMBER