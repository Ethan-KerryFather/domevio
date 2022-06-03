import React, { useEffect } from "react";
import FooterComponent from "./Footer";
import NavbarComponent from "./NavbarComponent";
import CarouselComponent from "./Carousel";
import AOS from "aos";
import "../style/Team.css";
function Home() {
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 1000);
  });

  return (
    <div>
      <NavbarComponent />
      <CarouselComponent data-aos="fade-up" data-aos-delay="300" />
      <br />
      <hr />
      <br />
      <h3 data-aos="fade-up" data-aos-delay="400" id="projectIntroduceTitle">
        가정폭력 팀 사회문제해결프로젝트 최종결과보고서
      </h3>
      <p data-aos="fade-up" data-aos-delay="600" id="projectIntroduce">
        가정폭력에 대한 사회적 제도 및 행정적 도움 언급 -> 피보팅 -> 사회행정적
        플랫폼 고안/개발
      </p>

      <iframe
        src="https://onedrive.live.com/embed?cid=A581D305D3D85C3C&resid=A581D305D3D85C3C%21240&authkey=AIiqZJjNbDbmcyQ&em=2"
        width="80%"
        height="600"
        frameborder="0"
        scrolling="no"
        data-aos="fade-up"
        data-aos-delay="500"
      ></iframe>
      {/* <iframe
        src="https://onedrive.live.com/embed?cid=A581D305D3D85C3C&resid=A581D305D3D85C3C%21238&authkey=AL9g1NebTNXUuio&em=2"
        width="1000"
        height="800"
        frameborder="0"
        scrolling="no"
        data-aos="fade-up"
        data-aos-delay="1200"
      ></iframe> */}
      <FooterComponent />
    </div>
  );
}

export default Home;
