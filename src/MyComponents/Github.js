import '../App.css';
import React from 'react';
import {Row,Col} from 'react-bootstrap';
import GitHubCalendar from 'react-github-calendar';
import { FaGithub } from "react-icons/fa";

export default function Github
(props) {
  return (
    <section >
        <div variant="dark" className='p-xl-5 mx-xl-5'>
            <>
                <Row className='justify-content-center'>
                    <Col className='col-3 justify-content-center d-flex' xs={12} md={6} xl={6}>
                        <h1 className='h1 banner_text2'><FaGithub className='ps-1 mx-2' size={50}/>Activity</h1>
                    </Col>
                </Row>
                <Row>
                    <a href="https://canary-skate-0f1.notion.site/e865e017332a4331b5e5bb6bf2961c99?v=f702d982517b41d6a24df10067bac140&pvs=74" target="_blank" className="text-center text-decoration-none text-primary">
                        <p className="p navtext">Get to know what I am currently working on 🔗</p>
                    </a>
                </Row>
                <Row className='justify-content-center'>
                    <GitHubCalendar username="NIXBLACK11" blockSize={20} fontSize={20}/>
                </Row>
        </>
        </div>
    </section>
  )
}