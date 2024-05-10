import '../App.css';
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../images/logo.png';
// import { FaGithub, FaTwitter, FaLinkedin, FaCode } from "react-icons/fa";

export default function Header(props) {
  return (
    <Navbar bg="dark" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#Home">
          <img
            alt="logo"
            src={logo}
            width="70"
            height="70"
            className="d-inline-block align-top rounded"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 align-items-center"
            style={{ maxHeight: '100px', overflowX: 'auto' }} // Added overflowX property
            navbarScroll
          >
            <Nav.Link href="#Home" className='mx-3 navtext font-link' style={{ fontSize: '20px' }}>Home</Nav.Link>
            <Nav.Link href="#About" className='mx-3 navtext font-link' style={{ fontSize: '20px' }}>About</Nav.Link>
            <Nav.Link href="#Activity" className='mx-3 navtext font-link' style={{ fontSize: '20px' }}>Activity</Nav.Link>
            <Nav.Link href="#Skills" className='mx-3 navtext font-link' style={{ fontSize: '20px' }}>Skills</Nav.Link>
            <Nav.Link href="#Education" className='mx-3 navtext font-link' style={{ fontSize: '20px' }}>Education</Nav.Link>
            <Nav.Link href="#Experience" className='mx-3 navtext font-link' style={{ fontSize: '20px' }}>Experience</Nav.Link>
            <Nav.Link href="#Recommendations" className='mx-3 navtext font-link' style={{ fontSize: '20px' }}>Recommendations</Nav.Link>
            <Nav.Link href="#Projects" className='mx-3 navtext font-link' style={{ fontSize: '20px' }}>Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}