import React, {useRef, useEffect, useState} from 'react' 
import {useInView} from 'react-intersection-observer'
import './styles/Container.css'

function Container({children, assets, getOpacity}){
  const [size, setSize] = useState(108)
  const [ref, inView, entry] = useInView({
    threshold:0.5
  })

  
  useEffect(() => {
    let startPos = window.pageYOffset
    const addScroll = () => {
      if(inView){
        let inViewLength = window.pageYOffset - startPos
        setSize(() => {
          return 108 + inViewLength/135
        })
      }
    }
    if(inView){
      window.addEventListener('scroll', addScroll)
    }
    else if(!inView){
      window.removeEventListener('scroll', addScroll)
    }
    return () => {
      window.removeEventListener('scroll', addScroll)
    }
  }, [inView])

  return(
    <section 
      ref={ref}
      className='container'
      style={{
        backgroundImage:`url(${assets.background})`,
        backgroundPosition:`${assets.backgroundY} ${assets.backgroundX}`,
        backgroundSize:`${size}% auto`
        }}>
      {children}
    </section>
  )
}

export default Container