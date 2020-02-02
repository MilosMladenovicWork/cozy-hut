import React from "react"
import Layout from '../layouts/layout'
import Container from '../components/Container'
import Content from '../components/Content'
import Header from '../components/Header'
import Button from '../components/Button'
import Description from '../components/Description'
import norway from '../images/norway.jpg'
import night from '../images/night.jpg'

const Index = () =>{
  return (
    <Layout>
        <Container 
          assets={{
            background:norway,
            backgroundX:'center', 
            backgroundY:'top'}}
        >
          <Content>
            <Header>
              Discover the nature
            </Header>
            <Description>
              Get in contact with the best, people oriented, touristic agency for exotic travels in the world. Explore islands, mountains or seas. Be one with the nature.
            </Description>
            <Button address='/contact'>
              Contact us
            </Button>
          </Content>
        </Container>
        <Container 
          assets={{
            background:night, 
            backgroundX:'center', 
            backgroundY:'center'}}
        >
          <Content>
            <Header>
              Discover inner self
            </Header>
            <Description>
              Get in contact with yourself or find people and get in contact with them. This is your one in the lifetime experience that you will remember.
            </Description>
            <Button address='/contact'>
              Contact us
            </Button>
          </Content>
        </Container>
    </Layout>
  )
} 


export default Index