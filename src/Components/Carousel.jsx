import React, { useEffect } from "react";
import "../style/CarouselStyle.css";
import AOS from "aos";

export default function CarouselComponent() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div>
      <img
        id="banner"
        src="img/banner.png"
        alt="image1"
        data-aos="fade-up"
        data-aos-delay="300"
      />
      {/* <UncontrolledCarousel
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
      /> */}
    </div>
  );
}
