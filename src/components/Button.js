import React from 'react'
import {Link} from 'gatsby'
import './styles/Button.css'

function Button({children, address}){
  return(
    <div className='button'>
      <Link to={address}>
        {children}
      </Link>
    </div>
  )
}

export default Button