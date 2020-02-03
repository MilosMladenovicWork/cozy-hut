import React from 'react'
import Container from '../components/Container'
import Content from '../components/Content'
import Header from '../components/Header'
import Layout from '../layouts/layout'
import Form from '../components/Form'
import winter from '../images/winter.jpg'

function Contact(){
  return(
    <Layout>
      <Container assets={{
        background:winter,
        backgroundX:'center',
        backgroundY:'center'
      }}
      >
        <Content>
          <Header>
            Contact Us
          </Header>
          <Form/>
        </Content>
      </Container>
    </Layout>
  )
}

export default Contact