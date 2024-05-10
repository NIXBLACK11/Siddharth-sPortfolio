import '../App.css';
import React from 'react'
import {Row,Col,Container,Button} from 'react-bootstrap'
import { GrAchievement } from "react-icons/gr";


export default function Recommendations
(props) {
  return (
    <section >
    <div variant="dark" className='p-xl-5 mx-xl-5'>
        <>
        <Row className='justify-content-center'>
            <Col className='col-1 justify-content-center d-flex' xs={12} md={6} xl={6}>
                <h1 className='h1 banner_text2'><GrAchievement className='ps-1 mx-2' size={50}/>Recommendations</h1>
            </Col>
        </Row>
        <Container className='rounded ' fluid>
        <Row className="bg-dark p-0 m-0 mt-5 mb-4 rounded">
			<Col className="col-1 p-0 m-4">
				<img src="kevin.jpeg" alt="la" width={70} className="img-fluid rounded-circle mt-4"/>
			</Col>
			<Col className="col-10 mr-4 ms-2 pt-2">
				<h3 className="h3 py-2 banner_text2">Kevin Heffernan</h3>
				<a href="https://www.linkedin.com/in/kevin-h-a556796/" target="_blank" className="text-decoration-none text-primary"><p className="p navtext">Tech Lead at FAIR (Meta AI Research)Tech Lead at FAIR (Meta AI Research)</p></a>
				<h3 className="small text-white py-2">I am grateful for the opportunity to have co-mentored Siddharth during his MLH fellowship with Meta AI. Over the course of the program, Siddharth established himself as a core contributor of the "laser_encoders" package <a href="https://github.com/facebookresearch/LASER/tree/main/laser_encoders" target="_blank" className="text-decoration-none text-primary">LASER</a>, and made significant contributions to the AI research community. One such contribution was the resolution of a hard-to-find and longstanding bug with an existing open-sourced and widely used Python library in ML research. Siddharth not only found the solution, but also quickly sent a pull request to the project, and landed it! It was a pleasure to work with Siddharth, and I'm hoping that our paths will cross again sometime in the near future!</h3>
			</Col>
		</Row>
    </Container>
</>
    </div>
    </section>
  )
}