import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Carousel1 from "../../../Assets/Images/carousel1.png";
import Carousel2 from "../../../Assets/Images/carousel2.png";
import Carousel3 from "../../../Assets/Images/carousel3.png";
import Carousel4 from "../../../Assets/Images/carousel4.png";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="my-carousel">
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={Carousel1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Carousel2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Carousel3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Carousel4} alt="Fourth slide" />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ControlledCarousel;
