import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Images } from "Shared/Images";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="my-carousel">
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={Images.carousel1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Images.carousel2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Images.carousel3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Images.carousel4} alt="Fourth slide" />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ControlledCarousel;
