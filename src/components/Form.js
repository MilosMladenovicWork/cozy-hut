import React from 'react'
import Button from '../components/Button'
import '../components/styles/Form.css'

const Form = () => {
  return(
    <form className='form'>
      <input type='text' placeholder='Name' name='name'/>
      <input type='email' placeholder='Email' name='email'/>
      <textarea placeholder='Message' name='message'></textarea>
      <Button>
        Submit
      </Button>
    </form>
  )
}

export default Form