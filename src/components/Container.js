import React, {useRef, useEffect, useState} from 'react' 
import {useInView} from 'react-intersection-observer'
import './styles/Container.css'

function Container({children, assets, getOpacity}){
  const [size, setSize] = useState(window.outerHeight/9)
  const [opacity, setOpacity] = useState(0)
  const [ref, inView, entry] = useInView({
    threshold:0.5
  })

  
  useEffect(() => {
    let startPos = window.pageYOffset
    const addScroll = () => {
      if(inView){
        let inViewLength = window.pageYOffset - startPos
        setSize(() => {
          // window.alert(window.outerHeight)
          return (window.outerHeight/9) + (inViewLength/(window.outerHeight/8))
        })
      }
    }
    if(inView){
      window.addEventListener('scroll', addScroll)
      setOpacity(() => {
        return 1
      })
    }
    else if(!inView){
      window.removeEventListener('scroll', addScroll)
      setOpacity(() => {
        return 0
      })
    }
    return () => {
      window.removeEventListener('scroll', addScroll)
    }
  }, [inView])

  const childrenWithData = React.Children.map(children, child => {
    return React.cloneElement(child, {
      opacity
    })
  })

  return(
    <section 
      ref={ref}
      className='container'
      style={{
        backgroundImage:`url(${assets.background})`,
        backgroundPosition:`${assets.backgroundY} ${assets.backgroundX}`,
        backgroundSize:`${size}% auto`
        }}>
      {childrenWithData}
    </section>
  )
}

export default Container