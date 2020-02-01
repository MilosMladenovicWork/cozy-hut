import React from 'react'
import './styles/Content.css'

function Content({children}){
  return(
    <div class='content'>
      {children}
    </div>
  )
}

export default Content