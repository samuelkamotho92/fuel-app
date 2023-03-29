import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/slider-img/petro4.avif";

const AboutSection = ({ aboutClass ,name }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to {name}</h2>
              <p className="section__description">
               Our web page  gives an overview of the services and fuel offered. It displays the range of fuels available such as unleaded, diesel and premium, as well as other services such as car wash, air and water, and convenience store items. It also displays the current fuel prices and any ongoing promotions or special offers. This page provides a convenient way for customers to quickly and easily find the services and fuel they need.
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
