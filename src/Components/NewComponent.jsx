import FooterComponent from "./Footer";
import React, { useEffect } from "react";
import NewsList from "./NewsList";
import AOS from "aos";
import "../style/Team.css";
export default function NewComponent() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div>
      <span id="projectIntroduce">
        <h3 data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
          이번 달은 여러가지 건강에 대한 뉴스들을 준비했습니다
        </h3>
        <p data-aos="fade-up" data-aos-delay="500" data-aos-duration="800">
          정독하시고 행복한 생각만 하세요^^
        </p>
        <i data-aos="fade-up" data-aos-delay="700" data-aos-duration="800">
          DomeVio 드림
        </i>
      </span>
      <hr />
      <NewsList />
      <br />
      <br />
      <FooterComponent />
    </div>
  );
}
