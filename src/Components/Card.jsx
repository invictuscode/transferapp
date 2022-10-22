import React from 'react'
import { useState, useEffect } from 'react'
import firebase from '../firebase'
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
  const navigate = useNavigate()


  const ref = firebase.firestore().collection("transferapps")

  // console.log(ref)

  const [data, setdata] = useState([]);
  const [loader, setloader] = useState(true);
  const [singleDoc, setSingleDoc] = useState({})
  const [unqDocID, setunqDocID] = useState("");

  const db = firebase.firestore()

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


  function fetchSingle(e) {


    db.collection("transferapps")

      .doc(data.id)
      .get()
      .then((snapshot) => {
        if (snapshot) {
          setSingleDoc(snapshot.data())
        }
      })
    navigate("/viewall")



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


  return (
    <>



      {loader === false && (data.map((apps) => (
        apps.status=='pending' ?( 
        < div className = "card m-2 text-dark shadow rounded " style = {(apps.severe == "Unstable") ? high : (apps.severe == "Fair") ? medium : low}>
      <div key={apps.id}>
        <h5>Case #: {apps.id}</h5>
        <h6>{apps.fname} {apps.lname} | {apps.hospitalname}</h6>
        <p>{apps.reason}</p>
        <div className="w-100 d-flex justify-content-between">

         
          <div className='d-flex'>

            <h5 className='mx-2'><i
              class=
              "fi fi-rr-comments"
            ></i></h5>
            {/* <h5 className='mx-2'> */}
            <button onClick={() => {
              editDoc({ status: "rejected", id: apps.id })}}>❌</button>
           <button onClick={() => {
              editDoc({ status: "accepted", id: apps.id })}}>✔</button>

          </div>
        </div>
      </div>
    </div>): null
      
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

export default Card