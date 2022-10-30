import React from 'react'
import { useState, useEffect } from 'react'
import firebase from '../firebase'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router'
import Transferlogo from '../Pages/Transferlogo'




function Card() {


  const ref = firebase.firestore().collection("transferapps")

  // console.log(ref)
  const navigate = useNavigate()
  const [data, setdata] = useState([]);
  const [loader, setloader] = useState(true);
  const [singleDoc, setSingleDoc]=useState({})

  const {id} = useParams()

  const db=firebase.firestore()



  function fetchSingle(id) {


    db.collection("transferapps")

      .doc(id)
      .get()
      .then((snapshot) => {
        if (snapshot) {
          setSingleDoc(snapshot.data())
        }
      })
    // navigate("/viewall")

     

  }

  fetchSingle(id)




  function goHome(){
    navigate('/')
  }

  return (
<>

<Transferlogo/>

<div className="d-flex justify-content-center flex-column">


   





 
     <div className="pinformation">
    
      <h6><span className="finame">First Name: </span> {singleDoc.fname}</h6>
      <h6><span className="finame">Last Name :</span>{singleDoc.lname}</h6>
      <h6><span className="finame">Date of Birth: </span>{singleDoc.dob}</h6>
      <br/>
      <h6><span className="finame">Date of Admission: </span>{singleDoc.doa}</h6>
      <h6><span className="finame">Bed Status: </span>{singleDoc.bedstatus}</h6>
      <br/>
      <h6><span className="finame">Vital Signs: </span>{singleDoc.vitals}</h6>
      <h6><span className="finame">Is Patient on Ventilator: </span>{singleDoc.ventilatorval}</h6>
      <h6><span className="finame">Drips: </span>{singleDoc.drips}</h6>
      <br/>
      <h6><span className="finame">Reason for Transfer: </span>{singleDoc.reason}</h6>
      <h6><span className="finame">Other Medical Problems: </span> {singleDoc.othermedicalproblems}</h6>
      <h6><span className="finame">Services: </span>{singleDoc.services}</h6>
      <br/>
      <h6><span className="finame">Nurse Name: </span> {singleDoc.nursename}</h6>
      <h6><span className="finame">Nurse Phone Number: </span>{singleDoc.nursenum}</h6>
      <h6><span className="finame">Physician's Name: </span>{singleDoc.docname}</h6>
      <h6><span className="finame">Physician's Phone Number: </span>{singleDoc.docnum}</h6>
      <br/>
      <h6><span className="finame">Hospital Name: </span>{singleDoc.hospitalnames}</h6>
      <h6><span className="finame">Hospital Phone Number: </span>{singleDoc.hospitalnum}</h6>
      <br/>
      <h6><span className="finame">Mode of Transportation: </span>{singleDoc.modeoftransportation}</h6>
      <h6><span className="finame">Patient Condition/Severity: </span>{singleDoc.severe}</h6>
      <br/>
      <h6><span className="finame">Facesheet PDF Link: </span><a href={singleDoc.url}>View Facesheet</a></h6>
      
      </div>
     </div>
    



      {/* <h6>{data.Issue} | {data.HospitalName}</h6>
      <p>Lorem ipsum dolor sit amet.</p>
      <div className="w-100 d-flex justify-content-between">
        <button className="h-100 w-50 rounded">Info</button>
        <div className='d-flex'>
          <h6 className='mx-2'> ❌ </h6>
          <h6 className='mx-2'> ✔ </h6>
        </div>
        </div> */}
      
 

    </>


  )
}

export default Card