import React from 'react'
import './styles/Header.css'

function Header({children}){
  let wordArr = children.split(' ')
  const heading = wordArr.map((word, index) => <h1 style={{width:'fit-content', marginBottom:'1.67vh'}} key={index}>{word}</h1>)
  return(
    <div class='header-words'>
      {heading}
    </div>
  )
}

export default Header