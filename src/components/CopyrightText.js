import React from 'react'
import './styles/CopyrightText.css'
import copyrightSign from '../images/copyright-sign.png'

function CopyrightText(){
  return(
    <div id='copyright-text'>
      <img src={copyrightSign}/>
      <p>Cozy Hut Copyright 2020</p>
    </div>
  )
}

export default CopyrightText