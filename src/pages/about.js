import React from 'react'
import Layout from '../layouts/layout'
import Container from '../components/Container'
import Content from '../components/Content'
import Header from '../components/Header'
import Button from '../components/Button'
import rock from '../images/rock.jpg'
import monkey from '../images/monkey.jpg'
import Description from '../components/Description'

function About(){
  return(
    <Layout>
      <Container
        assets={{
          background:rock,
          backgroundX:'center',
          backgroundY:'top'
        }}
      >
        <Content>
          <Header>
            About Us
          </Header>
          <Description>
            Get in contact with the best, people oriented, touristic agency for exotic travels in the world. Explore islands, mountains or seas. Be one with the nature.
          </Description>
          <Button address='/contact'>
            Contact Us
          </Button>
        </Content>
      </Container>
      <Container
        assets={{
          background:monkey,
          backgroundX:'center',
          backgroundY:'center'
        }}
      >
        <Content>
          <Header>
            Isolated Paradise
          </Header>
          <Description>
            We assure our clients of exotic unique experience that no other touristic agency can give them.
          </Description>
        </Content>
      </Container>
    </Layout>
  )
}

export default About