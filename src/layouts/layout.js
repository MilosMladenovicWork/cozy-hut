import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import '../components/styles/layout.css'

export default ({children}) => (
  <div className='layout'>
    <NavBar/>
    {children}
    <Footer/>
  </div>
)