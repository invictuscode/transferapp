
import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import OtpInput from 'react-otp-input'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import {signinemail} from '../firebase'
import { Link } from 'react-router-dom'



function Emaillogin() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    //Email SIGN IN
    const emailpass = () => {

        signinemail(email, password)
    }
    return (
        <div className='login_card p-3 mb-5 rounded'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => { setemail(e.target.value) }} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" placeholder="Password" onChange={(e) => { setpassword(e.target.value) }} />
                </Form.Group>


                <Button variant="primary" onClick={emailpass}>
                    Submit
                </Button>

            </Form>
            <p className="">Don't have an email account? </p><Link to='/signupemail'>Sign up</Link>

        </div>
    )
}

export default Emaillogin