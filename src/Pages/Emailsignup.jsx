import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import OtpInput from 'react-otp-input'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Emailsignup() {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    console.log(email)
    console.log(password)

    const auth = getAuth();
    const createUser = ()=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }

    return (

        <div className="App">
       
            <h1 className="headerlog">Sign UP</h1>

            <div className='login_card shadow-lg p-3 mb-5 rounded'>
                <Form>
                    {/* <Form.Group className="mb-3" controlId="formBasicName"> 

                        <Form.Control type="name" placeholder="Hospital Name" />
                    </Form.Group>*/}
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => { setemail(e.target.value) }} />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control type="password" placeholder="Password" onChange={(e) => { setpassword(e.target.value) }} />
                    </Form.Group>


                    <Button variant="primary" type="submit" onClick={createUser}>
                        Submit
                    </Button>
                </Form>

            </div>


        </div>

    )

}

export default Emailsignup