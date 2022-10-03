import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
function Transfer() {

    const vitals="Temp: \r\nHeart Rate: \r\nBlood Pressure: \r\nPulse Ox: "
  return (
    <div className="App">
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
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Last Name
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          DOB 
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Date of Admission
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Patient's Current Bed Status
        </InputGroup.Text>
        <Form.Control
        as="textarea"
          aria-label="Bed Status"
          
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Vital Signs
        </InputGroup.Text>
        <Form.Control
        as="textarea"
          aria-label="Vitals"
            defaultValue={vitals}
          rows="4"
        />
      </InputGroup>

      

      <InputGroup className="mb-3">
        <p className="text-white me-3"> Is the Patient on a ventilator?</p>
        <div className="yesorno text-white">
        <span><input type="radio"  className="radio"/> Yes</span>
        
        <span><input type="radio"  className="radio"/> No</span>
        </div>
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Drips
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Reasons for Transfer
        </InputGroup.Text>
        <Form.Control
        as="textarea"
          aria-label="Reason for Transfer"
           
        
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Consults/Services Needed
        </InputGroup.Text>
        <Form.Control
        as="textarea"
          aria-label="Reason for Transfer"
           
        
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Patient's Nurse Name
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Nurse Phone Number
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
        Patient's Physican's Name
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
        Physician's Contact Number
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
       Hospital Name
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
        Hospital Address
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
       Hospital Phone Number
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>

      
    
      </div>
    </div>
  )
}

export default Transfer