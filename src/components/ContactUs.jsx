import React, { useState, useEffect, useRef} from 'react';
import { Form as BTForm, FormGroup, Container, Input, Label, Col, Button } from 'reactstrap';

function ContactUs() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const [id, setId] = useState(Date.now());

  const [allContacts, setAllContacts] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    const contactData = {
      id: id,
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    }

    setAllContacts([...allContacts, contactData])
  };

  useEffect(() => {
    const contactDetails = localStorage.setItem('ContactDetails', JSON.stringify(allContacts))
  }, [allContacts])


  return (
    <div>
      <Container className='d-flex align-items-center justify-content-center' style={{ height: '80vh'}}>
        <BTForm className='w-100'>
          <Col className='col'>
            <Input type='text' for="firstName" id="firstNameRef" placeholder='Enter First Name' className='mb-3' innerRef={firstNameRef}></Input>
            <Input type='text' for="lastName" id="lastNameRef" placeholder='Enter Last Name' className='mb-3' innerRef={lastNameRef}></Input>
            <Input type='email' for="email" id="emailRef" placeholder='Enter Your Email' className='mb-3' innerRef={emailRef}></Input>
            <Input type='textarea' for="message" id="messageRef" placeholder='Enter your message here' className='mb-3' innerRef={messageRef}></Input>
            <Button type='submit' className='btn btn-danger' onClick={handleSubmit}>Submit</Button>
          </Col>
        </BTForm>
      </Container>
    </div>
  )
}

export default ContactUs;
