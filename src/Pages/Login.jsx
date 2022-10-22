import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import OtpInput from 'react-otp-input'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { confirmotp, emailpass } from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toasterror, toastsuccess } from '../Components/Toaster';
import {Link} from 'react-router-dom'
import Emaillogin from '../Components/Emaillogin';
import Phonelogin from '../Components/Phonelogin';


function Login() {
    //Phone Sign IN
    const [phone, setPhone] = useState(true)

    //Email Sign IN
   
    
    
  
    return (

        <div className="Login_page">

            <h1 className="headerlog">Login</h1>

            <div className="icons">
                <i className={"fi fi-rr-phone-call h2 mx-2 rounded " + (phone ? "text-light" : "text-muted")} onClick={() => {
                    setPhone(true)
                }}></i>
                <i className={"fi fi-rr-envelope h2 mx-2 rounded " + (phone ? "text-muted" : "text-light")} onClick={() => {
                    setPhone(false)
                }}></i>
            </div>

            {phone ? 
                <Phonelogin/>
                :
                <Emaillogin/>
                }

                        
        </div>

    )


}

export default Login