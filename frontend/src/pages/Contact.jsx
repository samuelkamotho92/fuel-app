import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url:"",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>

              <Form>
                <FormGroup className="contact__form">
                  <Input placeholder="Your Name" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Email" type="email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button className=" contact__btn" type="submit">
                  Send Message
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__description mb-0">
               Location: Tanzania region Dar es salaam, District Kinondoni  
                </p>
                <p className="section__description mb-0">
               Address: Kinondoni  Postal code 14110, Hananasif street near Hananasif Hospital.
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">+255693452233</p>
                  <p className="section__description mb-0">+255789599948</p>
                  <p className="section__description mb-0">+254710216071</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">info@srfleet.com</p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {/* {socialLinks.map((item, index) => (
                    <a
                      href="https://instagram.com/sr_fleetmanagement?igshid=YmMyMTA2M2Y="
                      target='_blank'
                      key={index}
                      className="social__link-icon" rel="noreferrer"
                    >
                      <i class={item.icon}></i>
                    </a>
                  ))} */}
                      <a
                      href="https://wa.me/+254710216071"
                      target='_blank'

                      className="social__link-icon" rel="noreferrer"
                    >
                      <i className='ri-whatsapp-line'></i>
                    </a>
                    <a
                      href="https://instagram.com/sr_fleetmanagement?igshid=YmMyMTA2M2Y="
                      target='_blank'
                      className="social__link-icon" rel="noreferrer"
                    >
                      <i className='ri-instagram-line'></i>
                    </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
