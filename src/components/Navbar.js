import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {

  return (
    
    <div className='qw' style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
      <Link to='/' style={{ textDecoration: 'none' }} ><h2>CountryGraph</h2></Link>
      <Link to='/socialmediaChart' style={{ textDecoration: 'none' }}><h2>SocialmediaGraph</h2></Link>
      <Link to='/studentbar' style={{ textDecoration: 'none' }} ><h2 style={{color:'black'}}>StudentGraph</h2></Link>

    </div> 

  )
}

export default Navbar