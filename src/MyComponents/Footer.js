import '../App.css';
import React from 'react'
import {Row,Col,Container,Button} from 'react-bootstrap'
import {FaPhone,FaEnvelope,FaLocationArrow} from "react-icons/fa";


export default function Footer
(props) {
  return (
    <section >
    <div variant="dark" className='bg-dark rounded'>
        <>
        {/* className='mt-5 pt-5 mb-5 pb-5' */}
        <Container fluid>
      <Row className=''>
      <Col className='col-xl-6 col-md-8 col-xs-12 justify-content-center text-center '>
          <p className='h4 banner_text font-link my-5'>🎯Thanks for visiting my Portfolio🛰️.</p>
        </Col>
        <Col className='col-2'></Col>
        <Col className='col-xl-4 col-md-6 col-xs-12 '>
        <div className='text-right mt-3'>
          <p className='h5 navtext font-link'><FaPhone className='navtext font-link' size={20}/>&emsp;+91 844-506-7401</p>
          <p className='h5 navtext font-link'><FaEnvelope className='navtext font-link' size={20}/>&emsp;Siddharthsinghrana11@gmail.com</p>
          <p className='h5 navtext font-link'><FaLocationArrow className='navtext font-link' size={20}/>&emsp;Dehradun,India</p>
        </div>
        </Col>
      </Row>
    </Container>
</>
    </div>
    </section>
  )
}