import React from 'react'
import './styles/Description.css'

function Description({children, opacity}){
  console.log(opacity)
  return(
    <p class='description' style={{opacity}}>
      {children}
    </p>
  )
}

export default Description