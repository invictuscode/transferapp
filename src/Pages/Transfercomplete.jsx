import React from 'react'
import {Link} from 'react-router-dom'

function Transfercomplete() {
  return (
    <div className="App">
        <div className="mt-5 d-flex justify-content-center align-items-center">
            <h1>Transfer Successfully Sent! ✔</h1>
        </div>
        <div className="mt-5 d-flex justify-content-center align-items-center">
            <Link className="btn btn-primary" to="/">Go to Home Page</Link>
        </div>
    </div>
  )
}

export default Transfercomplete