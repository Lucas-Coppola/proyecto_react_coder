import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './NavBar.css'


export default function NavBar() {
  return (
    <>
    <Navbar className='navBar' bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to={'/'}>Inicio</NavLink>
            <NavLink to={'categoria/america'}>América</NavLink>
            <NavLink to={'categoria/europa'}>Europa</NavLink>
          </Nav>

          <CartWidget/>
        </Container>
      </Navbar>
    </>
  )
}