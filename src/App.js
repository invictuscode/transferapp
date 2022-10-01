import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Login from './Pages/Login'
import Home from './Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import {auth} from './firebase'
import {useState, useEffect} from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import Emailsignup from './Pages/Emailsignup'

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
            <Route path='/signup' element={<Emailsignup/>} />
          </Routes>
        </BrowserRouter>
  
  );
}

export default App;
