import "../App.css";
import { useState } from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";

export default function Footer(props) {
  const [emailData, setEmailData] = useState({
    emailAddress: "",
    message: ""
  });

  function sendEmail() {
    const { emailAddress, message } = emailData;
    const subject = "Email from your website";
    const mailtoLink = `mailto:siddharthsinghrana11@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  
    window.location.href = mailtoLink;
    setEmailData({
      emailAddress: "",
      message: ""
    });
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmailData({
      ...emailData,
      [name]: value
    });
  };

  return (
    <section>
      <div variant="dark">
        <>
          <Container className='bg-dark rounded m-0 p-0 text-center' fluid>
            <Row className="p-0 m-0 rounded">
              {/* <Col className="mt-5 col-lg-6 col-md-12 col-xs-12"> */}
                <p className="h5 navtext font-link mt-5">
                  <FaPhone className="navtext font-link" size={20} />
                  &emsp;+91 844-506-7401
                </p>
                <p className="h5 navtext font-link">
                  <FaEnvelope className="navtext font-link" size={20} />
                  &emsp;Siddharthsinghrana11@gmail.com
                </p>
                <p className="h5 navtext font-link">
                  <FaLocationArrow className="navtext font-link" size={20} />
                  &emsp;Dehradun, India
                </p>
              {/* </Col> */}
              {/* <Col className="mt-0 col-lg-6 col-md-12 col-xs-12">
                <p className="h3 navtext">Contact me</p>
                <Form>
                  <Form.Group className="mt-0" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                      type="email" 
                      name="emailAddress"
                      value={emailData.emailAddress}
                      onChange={handleInputChange}
                      placeholder="name@example.com" 
                    />
                  </Form.Group>
                  <Form.Group className="" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={3} 
                      name="message"
                      value={emailData.message}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Button onClick={sendEmail} variant="primary" className="button_back mt-4">Send</Button>
                </Form>
              </Col> */}
            </Row>
            <Row className="p-0 m-0 rounded">
              <p className="h4 banner_text font-link my-5">
                🎯Thanks for visiting my Portfolio🛰️.
              </p>
            </Row>
          </Container>
        </>
      </div>
    </section>
  );
}
