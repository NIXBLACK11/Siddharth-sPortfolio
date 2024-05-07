import '../App.css';
import React from 'react'
import {Row,Col,Container,Button} from 'react-bootstrap'
import {FaGraduationCap} from "react-icons/fa";
// import {FaEnvelope, FaHeart} from "react-icons/fa";


export default function About
(props) {
  return (
    <section >
    <div variant="dark" className='p-xl-5 mx-xl-5'>
        <>
        <Row className='justify-content-center'>
            <Col className='col-3 justify-content-center d-flex' xs={12} md={6} xl={6}>
                <h1 className='h1 banner_text2'><FaGraduationCap className='ps-1 mx-2' size={50}/>Education</h1>
            </Col>
        </Row>
        <Container className='rounded ' fluid>
      <Row className="bg-dark p-0 m-0 mt-5 mb-4 rounded">
			<Col className="col-3 p-0 m-0">
				<img src="home.jpg" alt="la" widht="200" height="190" className="img-fluid rounded"/>
			</Col>
			<Col className="col mr-4 ms-2 pt-2">
				<h3 className="h3  py-2 banner_text2">Secondary (ICSE) and Higher Secondary (ISC)</h3>
				<a href="https://www.stjosephscollege.in/" target="_blank" className="text-decoration-none text-primary"><p className="p navtext">St.Joseph's College | Nainital</p></a>
				<h3 className="h4 text-white py-2">2009-2021 | Completed</h3>
			</Col>
		</Row>
        <Row className="bg-dark p-0 m-0 mt-5 mb-4 rounded">
			<Col className="col-3 p-0 m-0">
				<img src="graphic.jpg" alt="la" widht="200" height="190" className="img-fluid rounded"/>
			</Col>
			<Col className="col mr-4 ms-2 pt-2">
				<h3 className="h3  py-2 banner_text2">
					Bachelor of Technology in Computer Science and Engineering
				</h3>
				<a href="https://www.gehu.ac.in/" target="_blank" className="text-decoration-none text-primary"><p className="p navtext">Graphic Era Hill University | Dehradun</p></a>
				<h3 className="h4 text-white py-2">2021-2025 | Pursuing</h3>
			</Col>
		</Row>
    </Container>
</>
    </div>
    </section>
  )
}