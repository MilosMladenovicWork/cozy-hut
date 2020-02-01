import React from 'react'
import NavBar from '../components/NavBar'
import '../components/styles/layout.css'

export default ({children}) => (
  <div className='layout'>
    <NavBar/>
    {children}
  </div>
)