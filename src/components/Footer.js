import React from 'react'
import Container from '../components/Container'
import CopyrightText from '../components/CopyrightText'
import footerBackground from '../images/footer.jpg'

function Footer(){
  return(
    <footer id='footer'>
      <Container
        assets={{
          background:footerBackground,
          backgroundX:'center',
          backgroundY:'center'
        }}
      >
        <CopyrightText/>
      </Container>
    </footer>
  )
}

export default Footer