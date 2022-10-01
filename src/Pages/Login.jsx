import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import OtpInput from 'react-otp-input'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { confirmotp, emailpass } from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



function Login() {
    //Phone Sign IN
    const [phone, setPhone] = useState(true)
    const [otp, setOTP] = useState("");
    const [phonenum, setPhonenum] = useState("")
    const [cap, setCap] = useState({})
    //Email Sign IN
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    console.log(phonenum)
    const verify = async () => {
        try {
            const verifys = await confirmotp(phonenum)
            setCap(verifys)
        } catch (err) {
            console.log(err)
        }

    }

    const confirms = async () => {
        try {
            await cap.confirm(otp)
            console.log('Logged IN')
            toast.success('Number Verfied', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } catch (error) {
            console.log(error)
        }
    }
    //Email SIGN IN
    const emailpass=()=>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
            toast.success('Successfully Signed in with email!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
          // 
        })
      
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error)
        });
    }
    return (

        <div className="App">

            <h1 className="headerlog">Login</h1>

            <div className="icons">
                <i className={"fi fi-rr-phone-call h2 mx-2 rounded " + (phone ? "text-light" : "text-muted")} onClick={() => {
                    setPhone(true)
                }}></i>
                <i className={"fi fi-rr-envelope h2 mx-2 rounded " + (phone ? "text-muted" : "text-light")} onClick={() => {
                    setPhone(false)
                }}></i>
            </div>

            {phone ? <div className='login_card shadow-lg p-3 mb-5 rounded'>
                <div className='d-flex'>
                    <PhoneInput
                        placeholder="Enter phone number"
                        defaultCountry='US'
                        onChange={(e) => {
                            setPhonenum(e)
                        }}
                    />
                    <button onClick={verify} className='btn btn-warning ms-2'>Check Number</button>
                </div>

                <div id="recaptcha-container"></div>
                <div className='d-flex align-items-center justify-content-center'>

                    <h4 className='mt-4 me-3 text-muted'>OTP</h4>
                    <OtpInput className='otp mt-3'
                        value={otp}
                        onChange={(e) => { setOTP(e) }}
                        numInputs={6}
                        separator={<span></span>}
                    />
                </div>
                <div className="mt-5 w-100 d-flex justify-content-end">
                    <button disabled={(otp.length == "6") ? false : true} className="btn btn-warning" onClick={confirms}>
                        Login
                    </button>
                </div>
            </div>
                :
                <div className='login_card shadow-lg p-3 mb-5 rounded'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">

                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => { setemail(e.target.value) }}/>

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">

                            <Form.Control type="password" placeholder="Password" onChange={(e) => { setpassword(e.target.value) }}/>
                        </Form.Group>


                        <Button variant="primary" onClick={emailpass}>
                            Submit
                        </Button>
                        
                    </Form>
                    <p className="text-white">Don't have an email account? </p><a href='/signup'>Sign up</a>

                </div>}

                        
        </div>

    )

}

export default Login