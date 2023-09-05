import '../App.css';
import nav from "../images/nav-icon1.svg"
import React from 'react'
import {Nav,Navbar,NavDropdown,Container,Form,FormControl,Image} from 'react-bootstrap'
import logo from '../images/logo.png';
import {FaGithub,FaTwitter,FaLinkedin,FaHackerrank,FaCode} from "react-icons/fa";


export default function Header
(props) {
  return (
    <section>
      {/*  style={{backgroundColor: "white"}} */}
    <div variant="light">
        <>
        <Navbar bg="dark" expand="lg" fixed="top">
      <Container fluid>
      <Container className='col-1'>
      <Navbar.Brand href="#Home" >
        <img
          alt="logo"
          src="logo.png"
          width="70"
          height="70"
          className="d-inline-block align-top rounded "
        />{''}
      </Navbar.Brand>
    </Container>
    <Container className='col-6 '>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 align-items-center"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#Home" className='mx-5 navtext font-link'>Home</Nav.Link>
            <Nav.Link href="#About" className='mx-5 navtext font-link'>About</Nav.Link>
            <Nav.Link href="#Skills" className='mx-5 navtext font-link'>Skills</Nav.Link>
            <Nav.Link href="#Education" className='mx-5 navtext font-link'>Education</Nav.Link>
            <Nav.Link href="#Projects" className='mx-5 navtext font-link'>Projects</Nav.Link>
            <Nav.Link href="https://twitter.com/NIXBLACK_" target="_blank" className='mx-1'>
            <img
          alt="logo"
          src="twitter.png"
          width="40"
          height="40"
          className="d-inline-block align-top rounded "
        />
            {/* <FaTwitter className='navtext' size={30}/> */}
        </Nav.Link>
        <Nav.Link href="https://www.linkedin.com/in/siddharthsinghrana11/" target="_blank" className='mx-1'>
        <img
          alt="logo"
          src="linkedin.png"
          width="40"
          height="40"
          className="d-inline-block align-top rounded "
        />
        {/* <FaLinkedin className='navtext' size={30}/> */}
        </Nav.Link>
        <Nav.Link href="https://github.com/NIXBLACK11" target="_blank" className='mx-1'>
        <img
          alt="logo"
          src="github.png"
          width="40"
          height="40"
          className="d-inline-block align-top rounded "
        />
        {/* <FaGithub className='navtext' size={30}/> */}
        </Nav.Link>
        {/* href="https://www.hackerrank.com/Siddharthsinghr3?hr_r=1" href="https://auth.geeksforgeeks.org/user/siddharthsinghrana11" */}
        {/* onclick="window.open('https://www.hackerrank.com/Siddharthsinghr3?hr_r=1'); window.open('https://auth.geeksforgeeks.org/user/siddharthsinghrana11');" */}
        <Nav.Link href="https://leetcode.com/NIXBLACK/" target="_blank"className='mx-1'>
        <img
          alt="logo"
          src="leetcode.png"
          width="40"
          height="40"
          className="d-inline-block align-top rounded "
        />
        {/* <FaCode className='navtext' size={30}/> */}
        </Nav.Link>
        <Nav.Link href="https://auth.geeksforgeeks.org/user/siddharthsinghrana11" target="_blank" className='mx-1'>
        <img
          alt="logo"
          src="gfg.png"
          width="40"
          height="40"
          className="d-inline-block align-top rounded "
        />
        {/* <FaCode className='navtext' size={30}/> */}
        </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
        <Container className='col-1 bg-dark'></Container>
      </Container>
    </Navbar>
</>
    </div>
    </section>
  )
}