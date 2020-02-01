import React, {useRef, useEffect} from 'react' 
import './styles/Container.css'

function Container({children, assets}){

  return(
    <section 
      className='container'
      style={{
        backgroundImage:`url(${assets.background})`,
        backgroundPosition:`${assets.backgroundY} ${assets.backgroundX}`}}>
      {children}
    </section>
  )
}

export default Container