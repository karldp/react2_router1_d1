import React from 'react'
import { Container, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Navbars = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
    >
      <Container className="justify-content-start">
        <Link
          to="/"
          className="text-white ms-3 text-decoration-none"
        >
          🏠Home
        </Link>
        <Link
          to="/contact"
          className="text-white ms-3 text-decoration-none"
        >
          📒Contact
        </Link>
        </Container>
        <Container className='justify-content-end'>
        <Link
          to="/"
          className="text-white ms-3 text-decoration-none"
        >
        <Navbar.Brand>Sad Cake 🎂</Navbar.Brand>
        </Link>
        </Container>
    </Navbar>
  )
}

export default Navbars