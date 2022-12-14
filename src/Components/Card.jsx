import React from 'react'
import { useState, useEffect } from 'react'
import firebase from '../firebase'
import { Link } from 'react-router-dom'
import { getAuth, updateProfile } from "firebase/auth";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { auth, db } from "../firebase";
import { toastsuccess } from './Toaster';
 
const medium = {
  backgroundColor: "#ddffff", borderLeft: "5px solid #2196F3"
}

const high = {
  backgroundColor: "#ffcccb", borderLeft: "5px solid #FF0000"
}

const low = {
  backgroundColor: "#b3f5ba", borderLeft: "5px solid #0cc221"
}


function Card() {
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
      {loader === false && (data.map((apps, i) => (
         apps.statusa.includes("accepted") != true && apps.rejected1 != "rejected-"+hospitalname && apps.rejected2 != "rejected-"+hospitalname && apps.rejected3 != "rejected-"+hospitalname && apps.rejected4 != "rejected-"+hospitalname && apps.rejected5 != "rejected-"+hospitalname && apps.rejected6 != "rejected-"+hospitalname && apps.rejected7 != "rejected-"+hospitalname ? (

      
          <div key={i} className="card m-2 text-dark shadow rounded " style={(apps.severe == "Unstable") ? high : (apps.severe == "Fair") ? medium : low} >
            <div key={apps.id}>

              
              
              <h5>{apps.fname} {apps.lname} | Hospital: {apps.hospitalnames}</h5>
              <h6>Reason for Transfer: {apps.reason}</h6>
              <h6>Case #: {apps.id}</h6>
              
              <div className="w-100 d-flex justify-content-between">


                <div className='d-flex'>

                  
                  {/* <h5 className='mx-2'> */}
                  <button onClick={() => {
                   if(apps.rejected1==""){
                    editDoc({ rejected1: "rejected-"+hospitalname, id: apps.id })
                   } else if (apps.rejected2==""){
                    editDoc({ rejected2: "rejected-"+hospitalname, id: apps.id })
                   } else if (apps.rejected3==""){
                    editDoc({ rejected3: "rejected-"+hospitalname, id: apps.id })
                   } else if (apps.rejected4==""){
                    editDoc({ rejected4: "rejected-"+hospitalname, id: apps.id })
                   } else if (apps.rejected5==""){
                    editDoc({ rejected5: "rejected-"+hospitalname, id: apps.id })
                   } else if (apps.rejected6==""){
                    editDoc({ rejected6: "rejected-"+hospitalname, id: apps.id })
                   } else if (apps.rejected7==""){
                    editDoc({ rejected: "rejected-"+hospitalname, id: apps.id })
                   }
                  
                  }}>??? Reject Transfer</button>
                  <button onClick={() => {
                     editDoc({ statusa: "accepted-"+hospitalname, id: apps.id })
                  }}>??? Accept Transfer</button>

                 <button><Link to={'/viewall/'+apps.id} className="linknon"> ??? View Details </Link></button>
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
          <h5 className='mx-2'> ??? </h5>
          <h5 className='mx-2'> ??? </h5>
        </div>
        </div> */}



    </>


  )
}

export default Card


// CREATE A COLLECTION HOSPITAL INFO
// NAME, ID, ADDRESS, PHONENUMBER