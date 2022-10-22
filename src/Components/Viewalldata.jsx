import React from 'react'
import { useState, useEffect } from 'react'
import firebase from '../firebase'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router'
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

  // console.log(ref)
  const navigate = useNavigate()
  const [data, setdata] = useState([]);
  const [loader, setloader] = useState(true);
  const [singleDoc, setSingleDoc]=useState({})
  const [rid, setrid] = useState("");


  const db=firebase.firestore()

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

  function fetchSingle(e){
    const documentname=localStorage.getItem('documentnamez')
     console.log(documentname)
    // e.preventDefault()
    db.collection("transferapps")

    .doc(rid)
    .get()
    .then((snapshot)=>{
      if(snapshot){
        setSingleDoc(snapshot.data())
      }
    })
// console.log(singleDoc.fname)
  }

  useEffect(() => {
    getData()
    // console.log(data)
  }, [])

  function goHome(){
    navigate('/')
  }

  return (
<>

<div className="d-flex align-items-center justify-content-center text-white">


     <div key={singleDoc.id}>

<h3>View Specific Patient Data</h3>

<h5>Type Patient's ID from home page</h5>

     <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Patient ID
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => setrid(e.target.value)}
        />
         </InputGroup>

     <button onClick={fetchSingle} className="btn btn-primary">Show Details</button>
     <br/>
     <br/>
     <button onClick={goHome} className="btn btn-primary">Go back</button>
    
      <h6>First Name: {singleDoc.fname}</h6>
      <h6>Last Name: {singleDoc.lname}</h6>
      <h6>Date of Birth: {singleDoc.dob}</h6>
      <h6>Date of Admission: {singleDoc.doa}</h6>
      <h6>Bed Status: {singleDoc.bedstatus}</h6>
      <h6>Vitals: {singleDoc.vitals}</h6>
      <h6>Is the patient on Ventilator?: {singleDoc.ventilatorval}</h6>
      <h6>Drips: {singleDoc.drips}</h6>
      <h6>Reason for Transfer: {singleDoc.reason}</h6>
      <h6>Other Medical Problems: {singleDoc.othermedicalproblems}</h6>
      <h6>Services: {singleDoc.services}</h6>
      <h6>Nurse Name: {singleDoc.nursename}</h6>
      <h6>Nurse Number: {singleDoc.nursenum}</h6>
      <h6>Physician Name: {singleDoc.docname}</h6>
      <h6>Physician's Phone Number: {singleDoc.docnum}</h6>
      <h6>Hospital Name: {singleDoc.hospitalname}</h6>
      <h6>Hospital Phone Number: {singleDoc.hospitalnum}</h6>
      <h6>Mode of Transportation: {singleDoc.modeoftransportation}</h6>
      <h6>Patient Condition/Severity: {singleDoc.severe}</h6>
      
   
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