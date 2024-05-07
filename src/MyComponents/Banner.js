import '../App.css';
import React from 'react'
import {Row,Col,Container} from 'react-bootstrap'
import Typical from "react-typical";

// import {FaEnvelope, FaHeart} from "react-icons/fa";


export default function Banner
(props) {
  return (
    <section >
    <div variant="dark">
        <>
        {/* className='mt-5 pt-5 mb-5 pb-5' */}
        <Container className='mt-5 pt-5 pb-2'>
      <Row className='mb-5 pb-5 mt-5 pt-5'>
        <Col className='col-6 align-items-center mt-5 pb-5' xs={12} md={6} xl={6}>
          {/* <p><FaHeart size={70}/></p> */}
          <div className='mt-5'>
          <h1 className='h1 banner_text font-link'>Hi,</h1>
          <h1 className='h1 banner_text font-link'>My name is Siddharth Singh Rana</h1>
          <p className='h1 banner_text'>
            I'm A 
            <Typical
              loop={Infinity}
              wrapper="b"
              className="h1 banner_text2 font-link"
              steps={[
                ' Web Developer 🛰️',
                5000,
                ' Java Developer 💻',
                5000,
                ' Python Developer 🥇',
                5000,
                ' Cyber security enthusiast 🛡️',
                5000,
                ' Student 🎓',
                5000
              ]}
            />
          </p>
          </div>
        </Col>
        <Col className='col-6 justify-content-center text-center mt-5 mb-5 pb-5' xs={12} md={6} xl={6}>
        <img
          alt="logo"
          src="astro-r.png"
          // width="600"
          //height="550"
          className="vert-move img-fluid"
        />
        </Col>
      </Row>
    </Container>
</>
    </div>
    </section>
  )
}