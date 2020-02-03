import React from 'react'
import ButtonSimple from '../components/ButtonSimple'
import '../components/styles/Form.css'

const Form = () => {
  return(
    <form className='form' action='https://formsubmit.io/send/2f8c9a81-cdf3-4042-8fc7-04113cb3a1b2' method='POST'>
      <input type='text' placeholder='Name' name='name'/>
      <input type='email' placeholder='Email' name='email'/>
      <textarea placeholder='Message' name='message'></textarea>
      <ButtonSimple>
        Submit
      </ButtonSimple>
    </form>
  )
}

export default Form