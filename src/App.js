import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Login from './Pages/Login'
import Home from './Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import {auth} from './firebase'
import {useState, useEffect} from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import Emailsignup from './Pages/Emailsignup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Phonenumbersignup from './Pages/Phonenumbersignup'
import Transfer from './Pages/Transfer'

function App() {
  const [user, setuser]=useState(null)
  
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
      
    })
  }, []);

  return (

        <BrowserRouter>
          <Routes>
            <Route path='/' element={(user!==null) ? <Home/>:<Login/>} />
            <Route path='/signup' element={(user!=null) ? <Home/> : <Emailsignup/>} />
            <Route path='/phonesignup' element={<Phonenumbersignup/>}/>
            <Route path='/transfer' element={<Transfer/>}/>
          </Routes>
          <ToastContainer/>
        </BrowserRouter>
  
  );
}

export default App;
