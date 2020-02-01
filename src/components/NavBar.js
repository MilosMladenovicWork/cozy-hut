import React from 'react'
import {Link} from 'gatsby'
import logo from '../images/Logo.png'
import './styles/NavBar.css'

function NavBar(){
  return(
    <nav id='navbar'>
      <Link to='/about'>About</Link>
      <Link to='/'><img src={logo}/></Link>
      <Link to='/contact'>Contact</Link>
    </nav>
  )
}

export default NavBar