import React, { useEffect } from "react";
import FooterComponent from "./Footer";
import NavbarComponent from "./NavbarComponent";
import CarouselComponent from "./Carousel";
import AOS from "aos";
function Home() {
  useEffect(() => {
    AOS.init({});
  });

  return (
    <div>
      <NavbarComponent />
      <CarouselComponent data-aos="fade-up" data-aos-delay="300" />
      <br />
      <hr />
      <br />
      <h3 data-aos="fade-up" data-aos-delay="400">
        문제해결지침서
      </h3>
      <iframe
        src="https://onedrive.live.com/embed?cid=A581D305D3D85C3C&resid=A581D305D3D85C3C%21238&authkey=AL9g1NebTNXUuio&em=2"
        width="1000"
        height="800"
        frameborder="0"
        scrolling="no"
      ></iframe>
      <FooterComponent />
    </div>
  );
}

export default Home;
