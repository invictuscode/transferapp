import {React, useState} from 'react'
import PhoneInput from 'react-phone-number-input'
import OtpInput from 'react-otp-input'
import Button from 'react-bootstrap/Button';

import { confirmotp, emailpass } from '../firebase';
import { toasterror, toastsuccess } from '../Components/Toaster';

export default function Phonelogin() {
    const [otp, setOTP] = useState("");
    const [phonenum, setPhonenum] = useState("")
    const [cap, setCap] = useState({})


    const verify = async () => {
        try {
            const verifys = await confirmotp(phonenum)
            setCap(verifys)
        } catch (err) {
            console.log(err)
        }

    }

    const confirms = async () => {
        try {await cap.confirm(otp) 
            toastsuccess("Number Verified") } 
            catch (error) {toasterror("Could not verify number 🤷‍♂️")}}

  return (
    <div className='login_card shadow-lg p-3 mb-5 rounded'>
        <h6 className="text-white">To verify your identity, we will send you an authorization code</h6> <h6 className="text-white">(Text and Data Rates may apply)</h6>
    <div className='d-flex'>
        
    <PhoneInput
        placeholder="Enter phone number"
        defaultCountry='US'
        onChange={(e) => {
            setPhonenum(e)
        }}
    />
    <button onClick={verify} className='btn btn-warning ms-2'>Send Authorization Code</button>
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
<h6 className="text-white">Code will expire in 15 mins </h6> 
<div className=" w-100 d-flex justify-content-end">

    <button disabled={(otp.length == "6") ? false : true} className="btn btn-warning" onClick={confirms}>
        Login
    </button>
</div>
</div>
  )
}
