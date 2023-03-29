import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";

const CarItem = (props) => {
  const { imgUrl, serviceName,price} = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={imgUrl} alt="" height='268px' width='188px' className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{serviceName}</h4>
          <h6 className="rent__price text-center">
            ksh{price} per Litre
          </h6>
          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/services/${serviceName}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
