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
import Logo from '../Pages/logo.png'
import Transferlogo from './Transferlogo';

function Login() {
    //Phone Sign IN
    const [phone, setPhone] = useState(true)

    //Email Sign IN
   
    
    
  
    return (  
        <>
    
<Transferlogo/>

<div className="info d-flex justify-content-center align-items-center">
<h3>  Transfer patients efficiently and get them the care they need in a timely manner </h3>

</div>
<div className="infoz d-flex justify-content-center align-items-center">
<ul>
  <li>Submit transfer application to several hospitals simultaneously</li>
  <li>Communicate via live chat</li>
  <li>Transfer patient data securely</li>
</ul> 
</div>

        <div className="Login_page">

          

            <h1 className="headerlog">Login</h1>

            <div className="icons">
                <i className={"fi fi-rr-phone-call h2 mx-2 rounded " + (phone ? "text-dark" : "text-muted")} onClick={() => {
                    setPhone(true)
                }}></i>
                <i className={"fi fi-rr-envelope h2 mx-2 rounded " + (phone ? "text-muted" : "text-dark")} onClick={() => {
                    setPhone(false)
                }}></i>
            </div>

            {phone ? 
                <Phonelogin/>
                :
                <Emaillogin/>
                }

                        
        </div>
        </>
    )


}

export default Login