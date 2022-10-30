import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css';
import Login from './Pages/Login'
import Home from './Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth } from './firebase'
import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import Emailsignup from './Pages/Emailsignup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Phonenumbersignup from './Pages/Phonenumbersignup'
import Transfer from './Pages/Transfer'
import Transfercomplete from './Pages/Transfercomplete';
import Viewalldata from './Components/Viewalldata';
import SignIn from './Pages/Signin'
import SignUp from './Pages/Signup'
import ChatHome from './Pages/ChatHome'
import Viewtransfers from './Pages/Viewtransfers';
import Acc from './Pages/Acc'
import Rej from './Pages/Rej';


function App() {
  const [user, setuser] = useState(null)
  const [patientData, setpatientData] = useState([])




  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);

    })
  }, []);

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={(user !== null) ? <Home /> : <Login />} />
        <Route path='/signupemail' element={(user != null) ? <Home /> : <Emailsignup />} />
        <Route path='/phonesignup' element={<Phonenumbersignup />} />
        <Route path='/transfer' element={<Transfer />} />
        <Route path='/transfercomplete' element={<Transfercomplete />} />
        <Route path='/viewtransfers' element={<Viewtransfers />} />
        <Route path='/viewall/:id' element={<Viewalldata />} />
        <Route path="/rej" element={<Rej/>}/>
        <Route path='/acc' element={<Acc/>} />
        <Route exact path="/Signin"
          element={<SignIn />} />
        <Route path="/Signup"
          element={<SignUp />} />
        <Route path="/chat-home/:recieverId"
          element={<ChatHome />} />

      </Routes>
      <ToastContainer />
    </BrowserRouter>

  );
}

export default App;
