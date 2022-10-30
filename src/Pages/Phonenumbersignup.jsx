import { React, useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import OtpInput from 'react-otp-input'
import Button from 'react-bootstrap/Button';
import { getAuth, updateProfile } from "firebase/auth";
import { confirmotp, emailpass, db } from '../firebase';
import { toasterror, toastsuccess } from '../Components/Toaster';
import { doc, setDoc } from "firebase/firestore";
import Transferlogo from './Transferlogo';

export default function Phonenumbersignup() {
    const [otp, setOTP] = useState("");
    const [phonenum, setPhonenum] = useState("")
    const [hospitalname, setHospitalname] = useState("")
    const [cap, setCap] = useState({})


    const verify = async () => {
        try {
            const verifys = await confirmotp(phonenum)
            setCap(verifys)
        } catch (err) {
            console.log(err)
        }

    }
    const chatsignup=()=>{
        const auth = getAuth();
        const user = auth.currentUser;
        const hospitalname = user.displayName;
        setDoc(doc(db, "users", user.uid), {
            username: hospitalname,
            userId: user.uid,
            timestamp: new Date(),
        })
    }
    const confirms = async () => {
        try {
            await cap.confirm(otp)
            toastsuccess("Number Verified")
            console.log(hospitalname)
       
            const auth = getAuth();
            updateProfile(auth.currentUser, {
                displayName: hospitalname
            }).then(() => {
                chatsignup()
            }).catch((error) => {
                // An error occurred
                // ...
            });
            
            
          
          
          
        }
        catch (error) {
            toasterror("Could not verify number!")
            console.log(hospitalname)
        }
    }

   
    
    return (

        <>
        <Transferlogo/>
        <div className="Login_page">
            <h1 className="headerlog">Sign UP</h1>
            <div className='login_card p-3 mb-5 rounded'>
                <div className='d-flex'>
                    <PhoneInput
                        placeholder="Enter phone number"
                        defaultCountry='US'
                        onChange={(e) => {
                            setPhonenum(e)
                        }}
                    />
                    <button onClick={verify} className='btn btn-warning ms-2'>Verify Number</button>
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
                <div className="d-flex align-items-center justify-content-center hospitalname"><h5 className="me-3">Enter Hospital Name</h5> <input type="name" placeholder="Hospital Name" value={hospitalname} onChange={(e) => { setHospitalname(e.target.value) }} /></div>
                <div className="mt-5 w-100 d-flex justify-content-end">
                    <button disabled={(otp.length == "6" & hospitalname.length != 0) ? false : true} className="btn btn-warning" onClick={()=>{
                        confirms()
                        
                    }}>
                        Sign up
                    </button>
                   
                </div>
            </div> 
        </div>
        </>
    )
}
