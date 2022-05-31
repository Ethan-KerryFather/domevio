import React, { useEffect } from "react";
import NavbarComponent from "./NavbarComponent";
import AOS from "aos";
import "aos/dist/aos.css";
import FooterComponent from "./Footer";

export default function Guide() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div>
      <NavbarComponent />
      <h3 data-aos="fade-up" data-aos-delay="300">
        가정폭력 카드뉴스
      </h3>
      <iframe
        src="https://onedrive.live.com/embed?cid=A581D305D3D85C3C&resid=A581D305D3D85C3C%21237&authkey=ACTYwi6ZvoHHxyg&em=2"
        width="80%"
        height="600"
        frameborder="0"
        scrolling="no"
      ></iframe>

      <FooterComponent />
    </div>
  );
}
