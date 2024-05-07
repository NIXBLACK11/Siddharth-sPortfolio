import '../App.css';
import React from 'react'
import {Row,Col,Container,Button} from 'react-bootstrap';
import { CgAlbum } from "react-icons/cg";
// import {FaEnvelope, FaHeart} from "react-icons/fa";


export default function Experience
(props) {
  return (
    <section >
    <div variant="dark" className='p-xl-5 mx-xl-5'>
        <>
        <Row className='justify-content-center'>
            <Col className='col-3 justify-content-center d-flex' xs={12} md={6} xl={6}>
                <h1 className='h1 banner_text2'><CgAlbum className='ps-1 mx-2' size={50}/>Experience</h1>
            </Col>
        </Row>
        <Container className='rounded ' fluid>
        <Row className="bg-dark p-0 m-0 mt-5 mb-4 rounded">
			<Col className="col-3 p-0 m-0">
				<img src="META.png" alt="la" widht="200" height="190" className="img-fluid rounded"/>
			</Col>
			<Col className="col mr-4 ms-2 pt-2">
				<h3 className="h3  py-2 banner_text2">Software Engineer Intern</h3>
				<a href="https://opensource.fb.com/partnerships/major-league-hacking/" target="_blank" className="text-decoration-none text-primary"><p className="p navtext">META | Major League Hacking</p></a>
				<h3 className="h4 text-white py-2">September-December (2023) | Completed</h3>
			</Col>
		</Row>
    </Container>
</>
    </div>
    </section>
  )
}