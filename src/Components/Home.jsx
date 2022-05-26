import React from "react";
import FooterComponent from "./Footer";
import NavbarComponent from "./NavbarComponent";
import CarouselComponent from "./Carousel";

function Home() {
  return (
    <div>
      <NavbarComponent />
      <CarouselComponent />
      <br />
      <hr />
      <br />
      <h3>문제해결지침서</h3>
      <iframe
        src="https://onedrive.live.com/embed?cid=A581D305D3D85C3C&resid=A581D305D3D85C3C%21238&authkey=AL9g1NebTNXUuio&em=2"
        width="600"
        height="500"
        frameborder="0"
        scrolling="no"
      ></iframe>
      <FooterComponent />
    </div>
  );
}

export default Home;
