import React from 'react'
import './styles/Description.css'

function Description({children}){
  return(
    <p class='description'>
      {children}
    </p>
  )
}

export default Description