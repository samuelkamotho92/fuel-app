import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/hero-slider.css";

const HeroSlider = ({name,location}) => {
  const settings = {
    dots:true,
    fade: false,
    speed: 2000,
    autoplaySpeed: 6000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Welcome to {name}</h4>
            <h1 className="text-light mb-4">Get our quality service and products today</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/">More Details</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Our services</h4>
            <h1 className="text-light mb-4">We have best Fuel prices</h1>
            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Services</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Why Choose Us</h4>
            <h1 className="text-light mb-4">We got 24/7 customer service,affordable solutions and high quality fuel product</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/contact">Contact us</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
