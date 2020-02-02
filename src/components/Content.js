import React from 'react'
import './styles/Content.css'

function Content({children, opacity}){
  const childrenWithData = React.Children.map(children, child => {
    return React.cloneElement(child, {
      opacity
    })
  })
  return(
    <div class='content' style={{opacity}}>
      {childrenWithData}
    </div>
  )
}

export default Content