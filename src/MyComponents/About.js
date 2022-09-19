import '../App.css';
import React from 'react'
import {Row,Col,Container,Button} from 'react-bootstrap'
import {FaUser,FaArrowCircleDown} from "react-icons/fa";


export default function About
(props) {
  return (
    <section >
    <div variant="dark">
        <>
        {/* className='mt-5 pt-5 mb-5 pb-5' */}
        <Container className='mt-5 pt-5 pb-2'>
        <Row className='justify-content-center mb-5'>
            <Col className='col-3 justify-content-center d-flex' xs={12} md={6} xl={6}>
                <h1 className='h1 banner_text2'><FaUser className='ps-1 mx-2' size={35}/>About</h1>
            </Col>
        </Row>
      <Row className='mb-3 pb-3'>
      <Col className='col-xl-6 col-md-8 col-xs-12  justify-content-center text-center ' xs={12} md={6} xl={6}>
        <img
          alt="logo"
          src="about.jpg"
          // width="625"
          // height="500"
          className="img-fluid"
        />
        </Col>
        <Col className='col-xl-6 col-md-8 col-xs-12 align-items-center '>
          {/* <p><FaHeart size={70}/></p> */}
          <div className='mt-5'>
          <h1 className='h1 font-link banner_text2'>Siddharth Singh Rana</h1>
          {/* <br></br> */}
          <h1 className='h3 banner_text3 font-link'>Student</h1>
          <br></br>
          <br></br>
          <p className='h4 banner_text font-link'>🎯&emsp;I am a hard working and organized individual🥇.<br></br>🎯&emsp;Looking to start a career as an entry-level professional<br/>&emsp;with a reputed IT company to enhance and explore my<br/>&emsp;technical knowledge gained at Graphic Era University😎.<br></br>🎯&emsp;Innovative, creative, and willing to contribute ideas<br/>&emsp;and learn new things🚀.<br></br>🎯&emsp;Proficient in C, Python, Bash and Java🛸.<br></br>🎯&emsp;Won several coding competitions🛰️.</p>
          </div>
        </Col>
      </Row>
      <Row className='mb-5'>
        <div className='text-center'>
          <Button href="Finalresume.pdf" target="_blank" className='button_back'><span>Resume</span><FaArrowCircleDown className="ps-1" size={25}/></Button>
          </div>
      </Row>
    </Container>
</>
    </div>
    </section>
  )
}