import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavBar() {
  return (
    <>
    <Navbar className='navBar' bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">América</Nav.Link>
            <Nav.Link href="#nada">Europa</Nav.Link>
          </Nav>

          <CartWidget/>
        </Container>
      </Navbar>
    </>
  )
}