import React from 'react'
import './styles/ButtonSimple.css'

const ButtonSimple = ({children}) => {
  return(
    <button>
      {children}
    </button>
  )
}

export default ButtonSimple