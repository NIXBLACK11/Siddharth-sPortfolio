import "../App.css";
import React from "react";
import { Row, Col, Container, Button, Card } from "react-bootstrap";
import { FaProjectDiagram } from "react-icons/fa";

export default function Projects(props) {
  return (
    <section>
      <div variant="dark" className=" ">
        <>
          <Row className="justify-content-center">
            <Col
              className="col-3 justify-content-center d-flex"
              xs={12}
              md={6}
              xl={6}
            >
              <h1 className="h1 banner_text2">
                <FaProjectDiagram className="ps-1 mx-2" size={35} />
                Projects
              </h1>
            </Col>
          </Row>
          <Container className="rounded" fluid>
            <Row className="d-flex justify-content-center py-3 rounded ">
              {/* <Col className='col-3 text-center justify-content-center col-col mx-3 rounded'>
      <img
          alt="logo"
          src="project-img1.jpg"
          width="350"
          height="200"
          className="rounded mt-2"
        />
        <h4 className='h4 navtext mt-2 mb-3'>Arduino Robot</h4>
        </Col> */}
              <Card style={{ width: "25rem" }} className="mx-3  my-3 col-col">
                <Card.Img
                  variant="top"
                  src="project-img1.jpg"
                  className="rounded mt-2"
                />
                <Card.Body>
                  <Card.Title className="banner_text">Arduino Robot</Card.Title>
                  <Card.Text className="banner_text">
                    Arduino robot which can be controlled via Bluetooth and has
                    InfraRed and Ultrasonic sensors.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "25rem" }} className="mx-3  my-3 col-col">
                <Card.Img
                  variant="top"
                  src="project-img2.jpg"
                  className="rounded mt-2"
                />
                <Card.Body>
                  <Card.Title className="banner_text">
                    Personal Portfolio
                  </Card.Title>
                  <Card.Text className="banner_text">
                    Responsive Portfolio website built with ReactJs.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "25rem" }} className="mx-3  my-3 col-col">
                <Card.Img
                  variant="top"
                  src="project-img3.jpg"
                  className="rounded mt-2"
                />
                <Card.Body>
                  <Card.Title className="banner_text">Desktop App</Card.Title>
                  <Card.Text className="banner_text">
                    Desktop app with login, update, delete, register
                    functionality.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
            <Row className="d-flex justify-content-center py-3 rounded ">
              <Card style={{ width: "25rem" }} className="mx-3  my-3 col-col">
                <Card.Img
                  variant="top"
                  src="project-img4.png"
                  className="rounded mt-2"
                />
                <Card.Body>
                  <Card.Title className="banner_text">
                    Instagram Hashtag Finder
                  </Card.Title>
                  <Card.Text className="banner_text">
                    Search Engine to find the hashtag related to topics in
                    instagram.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "25rem" }} className="mx-3  my-3 col-col">
                <Card.Img
                  variant="top"
                  src="project-img5.png"
                  className="rounded mt-2"
                />
                <Card.Body>
                  <Card.Title className="banner_text">
                    Telegram chat bot
                  </Card.Title>
                  <Card.Text className="banner_text">
                    Used by users to view account info and basic bank policies
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "25rem" }} className="mx-3  my-3 col-col">
                <Card.Img
                  variant="top"
                  src="chatBot.jpg"
                  className="rounded mt-2"
                  height={300}
                />
                <Card.Body>
                  <Card.Title className="banner_text">NIMBLE</Card.Title>
                  <Card.Text className="banner_text">
                    Desktop chat app, that uses face recognition as login.
                  </Card.Text>
                </Card.Body>
              </Card>

              {/* NEW */}

              <Card style={{ width: "25rem" }} className="mx-3  my-3 col-col">
                <Card.Img
                  variant="top"
                  src="bertproject.jpg"
                  className="rounded mt-2"
                />
                <Card.Body>
                  <Card.Title className="banner_text">Chrome Extension using BERT</Card.Title>
                  <Card.Text className="banner_text">
                    Utilized Google BERT for real-time text summarization, enhancing user productivity.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "25rem" }} className="mx-3  my-3 col-col">
                <Card.Img
                  variant="top"
                  src="Feedback.png"
                  className="rounded mt-2"
                  height={300}
                />
                <Card.Body>
                  <Card.Title className="banner_text">Feedback Loop</Card.Title>
                  <Card.Text className="banner_text">
                    Video analysis app that gives people insights of thier creations.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "25rem" }} className="mx-3  my-3 col-col">
                <Card.Img
                  variant="top"
                  src="linktree.jpeg"
                  className="rounded mt-2"
                  height={300}
                />
                <Card.Body>
                  <Card.Title className="banner_text">Go Link Tree</Card.Title>
                  <Card.Text className="banner_text">
                    A place to store and share your links.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "25rem" }} className="mx-3  my-3 col-col">
                <Card.Img
                  variant="top"
                  src="codeChat.png"
                  className="rounded mt-2"
                  height={200}
                />
                <Card.Body>
                  <Card.Title className="banner_text">Chat app</Card.Title>
                  <Card.Text className="banner_text">
                    Connect multiple users and chat in real time.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "25rem" }} className="mx-3  my-3 col-col">
                <Card.Img
                  variant="top"
                  src="vgg16.png"
                  className="rounded mt-2"
                  height={200}
                />
                <Card.Body>
                  <Card.Title className="banner_text">Research Paper on IOT malware detection</Card.Title>
                  <Card.Text className="banner_text">
                    Detect malware in files using image recognition.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
          </Container>
        </>
      </div>
    </section>
  );
}
