import React from "react";
import { Carousel } from "react-bootstrap";

import isa from "../img/isa.jpeg";
import devops from "../img/devops.jpeg";
import about from "../img/about.jpeg";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={isa} alt="isa" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={devops} alt="devops" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={about} alt="about" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
