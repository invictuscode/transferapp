import React, { useState } from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { v4 as uuidv4 } from 'uuid'
import firebase from '../firebase'
import { linkWithCredential } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
// import { nanoid } from 'nanoid'
import ShortUniqueId from 'short-unique-id';
import storage from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


function Transfer() {
  const navigate = useNavigate();
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [dob, setdob] = useState("");
  const [doa, setdoa] = useState("");
  const [bedstatus, setbedstatus] = useState("");
  const [vitals, setvitals] = useState("");
  const [ventilatorval, setventilatorval] = useState("");
  const [drips, setdrips] = useState("")
  const [reason, setreason] = useState("")
  const [othermedicalproblems, setothermedicalproblems] = useState("")
  const [services, setservices] = useState("")
  const [nursename, setnursename] = useState("")
  const [nursenum, setnursenum] = useState("")
  const [docname, setdocname] = useState("")
  const [docnum, setdocnum] = useState("")
  const [hospitalname, sethospitalname] = useState("")
  const [hospitalplace, sethospitalplace] = useState("")
  const [hospitalnum, sethospitalnum] = useState("")
  const [modeoftransportation, setmodeoftransportation] = useState("")
  const [severe, setsevere] = useState("");
  const uid = new ShortUniqueId({ length: 6 });
  const id = uid()
  const status = "pending"

  console.log("firstname: " + fname)
  console.log("lastname: " + lname)
  console.log("dob: " + dob)
  console.log("doa: " + doa)
  console.log("bedstatus: " + bedstatus)
  console.log("vitals: " + vitals)
  console.log("ventilatorval: " + ventilatorval)
  console.log("drips: " + drips)
  console.log("reason: " + reason)
  console.log("other medical problems: " + othermedicalproblems)
  console.log("consults/services: " + services)
  console.log("nurse name: " + nursename)
  console.log("nurse number: " + nursenum)
  console.log("physician name: " + docname)
  console.log("doctor number: " + docnum)
  console.log("hospital name: " + hospitalname)
  console.log("hospital place: " + hospitalplace)
  console.log("hospital num: " + hospitalnum)
  console.log("mode of transportation: " + modeoftransportation)
  console.log("severity: " + severe)




  const vitalinfo = "Temp: \r\nHeart Rate: \r\nBlood Pressure: \r\nPulse Ox: "

  const ref = firebase.firestore().collection("transferapps")

  const [image, setimage] = useState(null);
  const uniqID = new Date()

  const imageupload = (e) => {
    const fileimage = e.target.files;
    setimage(fileimage)
  }


  var uploadlink = {};
  function uploadimg(img) {
    const storageRef = ref(storage, `images/${uniqID}.${img.name}`);

    //Firebasecode
    const uploadTask = uploadBytesResumable(storageRef, img);

    uploadTask.on('state_changed',
      (snapshot) => {

        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');

      },
      (error) => {
        console.log(error)
      },
      () => {

        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          localStorage.setItem('Imagelink', downloadURL)
         uploadlink.link=downloadURL
        });
      }
    ); 

  }


  const link = uploadlink.link
  // Send data into firebase :)
  function createDoc(newDataObj) {

    console.log('✔')
    ref
      .doc(id)
      .set(newDataObj)
      .catch((err) => {
        alert(err)
        console.error(err)
      })

    navigate("/Transfercomplete");
  }
  return (
    <div className="container d-flex justify-content-center align-items-center flex-column">
      <div className="header">
        <h1 className="text-white">Create A Transfer Request</h1>
      </div>

      <div className="info w-50">
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            First Name
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            onChange={(e) => setfname(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Last Name
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            onChange={(e) => setlname(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            DOB
          </InputGroup.Text>
          <Form.Control
            type="date"
            aria-label="date"
            aria-describedby="inputGroup-sizing-default"
            onChange={(e) => setdob(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Date of Admission
          </InputGroup.Text>
          <Form.Control
            type="date"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            onChange={(e) => setdoa(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Patient's Current Bed Status
          </InputGroup.Text>
          <Form.Control
            as="textarea"
            aria-label="Bed Status"
            onChange={(e) => setbedstatus(e.target.value)}

          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Vital Signs
          </InputGroup.Text>
          <Form.Control
            as="textarea"
            aria-label="Vitals"
            defaultValue={vitalinfo}
            onChange={(e) => setvitals(e.target.value)}
            rows="4"

          />
        </InputGroup>



        <InputGroup className="mb-3">
          <p className="text-white me-3"> Is the Patient on a ventilator?</p>
          <div className="yesorno text-white">
            <span><input type="radio" name="radiobtn" value="Yes" onChange={(e) => { setventilatorval("yes") }} /> Yes</span>

            <span><input type="radio" name="radiobtn" value="No" onChange={(e) => { setventilatorval("no") }} /> No</span>
          </div>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Drips
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            onChange={(e) => setdrips(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Reasons for Transfer
          </InputGroup.Text>
          <Form.Control
            as="textarea"
            aria-label="Reason for Transfer"
            onChange={(e) => setreason(e.target.value)}

          />
        </InputGroup>


        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Other Medical Problems
          </InputGroup.Text>
          <Form.Control
            as="textarea"
            aria-label="Other medical problems"
            onChange={(e) => setothermedicalproblems(e.target.value)}

          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Consults/Services Needed
          </InputGroup.Text>
          <Form.Control
            as="textarea"
            aria-label="Reason for Transfer"
            onChange={(e) => setservices(e.target.value)}

          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Patient's Nurse Name
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            onChange={(e) => setnursename(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Nurse Phone Number
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            onChange={(e) => setnursenum(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Physican's Name
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            onChange={(e) => setdocname(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Physician's Contact Number
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            onChange={(e) => setdocnum(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Hospital Name
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            onChange={(e) => sethospitalname(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Hospital Address
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            onChange={(e) => sethospitalplace(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Hospital Phone Number
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            onChange={(e) => sethospitalnum(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <p className="text-white me-3"> Mode of Transportation </p>
          <div className="yesorno text-white">
            <span><input type="radio" name="transport" className="radio" onChange={(e) => { setmodeoftransportation("Ambulance") }} /> Ambulance</span>

            <span><input type="radio" name="transport" className="radio" onChange={(e) => { setmodeoftransportation("Air Transport") }} /> Air Transport</span>
          </div>
        </InputGroup>

        <InputGroup className="mb-3">
          <Form.Group controlId="formFile" className="mb-3">

            <Form.Label className="text-white">Upload Face sheet</Form.Label>
           <span> <Form.Control type="file" onChange={imageupload}/>
           <br/>
            <button className='btn btn-warning' onClick={uploadimg}>Confirm Upload</button></span>
          </Form.Group>
        </InputGroup>

        <InputGroup className="mb-3">
          <p className="text-white me-3"> Clinical Status </p>
          <div className="yesorno text-white">
            <input list="status" name="statusz" id="statusz" onChange={(e) => { setsevere(e.target.value) }} />

            <datalist id="status">
              <option value="Stable" />
              <option value="Fair" />
              <option value="Unstable" />

            </datalist>
          </div>
        </InputGroup>



        <button className="btn btn-primary" onClick={() => {
          createDoc({ fname, lname, dob, doa, bedstatus, vitals, ventilatorval, drips, reason, othermedicalproblems, services, nursename, nursenum, docname, docnum, hospitalname, hospitalplace, hospitalnum, modeoftransportation, severe, id, status, link })
        }}>Send Transfer Request</button>
      </div>
    </div>
  )
}

export default Transfer