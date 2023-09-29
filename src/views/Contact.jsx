import React from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const Contact = () => {
  return (
    <>
    <div className='title-container'>
      <h1>If you need help you can try to contact us</h1>
      <p>We don't care, but you can try anyway</p>
      <div className='cake-emoji'>🥱</div>
    </div>

    <div className='form-container'>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address:</Form.Label>
        <Form.Control type="email" placeholder="sad@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description:</Form.Label>
        <Form.Control as="textarea" rows={4} />
      </Form.Group>
    </Form>
    <div className="d-flex justify-content-center">
        <Button>Send</Button>
    </div>
    </div>
    </>
  )
}

export default Contact