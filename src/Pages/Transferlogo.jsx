import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Pages/logo.png'

function Transferlogo() {
  return (
   <Link to="/" className="homelinks"> <h1 className="mainheader text-dark"><span className="m2">Transfer</span><i>NOW</i><img src={Logo} height="175px"/></h1> </Link> 
  )
}

export default Transferlogo