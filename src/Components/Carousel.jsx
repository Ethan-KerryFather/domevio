import React from "react";
import "../style/CarouselStyle.css";
import { UncontrolledCarousel } from "reactstrap";

export default function CarouselComponent() {
  return (
    <>
      <UncontrolledCarousel
        className="carousel"
        items={[
          {
            altText: "Slide 1",
            key: 1,
            src: "img/1.png",
          },
          {
            altText: "Slide 2",
            key: 2,
            src: "img/3.png",
          },
          {
            altText: "Slide 3",

            key: 3,
            src: "img/2.png",
          },
        ]}
      />
    </>
  );
}
