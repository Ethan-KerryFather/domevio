import React, { useEffect } from "react";
import AOS from "aos";
import FooterComponent from "./Footer";
export default function Project() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div style={{ lineHeight: "2" }}>
      <h2 data-aos="zoom-out-up" data-aos-duration="1500" data-aos-delay="300">
        안녕하세요!
      </h2>
      <hr />

      <div data-aos="zoom-out-up" data-aos-duration="1500" data-aos-delay="500">
        <span style={{ border: "solid" }}>
          <h3>DomeVio를 소개합니다!</h3>
          <i>Domestic Violence => DomeVio</i>
          <p>가정폭력, 영어로 Domestic Violence입니다</p>
          <p>Dome+Vio 각 앞 글자를 따와서 DomeVio라는 이름을 부여하였습니다</p>
          <p>저희는 가정폭력에 대한 올인원 서비스를 지향합니다</p>
          <p>
            기존의 신고따로, 상담따로, 처벌따로, 후관리 따로의 가정폭력처리
            프로세스의 문제점을 해결하기 위해서 우리는 나왔습니다
          </p>
        </span>
      </div>

      <div data-aos="zoom-out-up" data-aos-duration="1500" data-aos-delay="700">
        <hr />
        <span style={{ border: "solid" }}>
          <h3>기능소개</h3>
          <h1>|</h1>
          <h5>가정폭력 게시판</h5>
          <p>
            가정폭력과 관련된 경험을 익명으로 공유하여 타 신고자에게 참조자료를
            제공합니다. 더불어 서로 간의 소통이 가능합니다
          </p>
          <h1>|</h1>
          <h5>Domevio 가이드</h5>
          <p>
            가정폭력 신고와 관련한 정보를 신고프로세스대로 정리하여, 신고자가
            어떤 행동을 해야할 지 정보를 제공합니다.
          </p>
        </span>
      </div>

      <div data-aos="zoom-out-up" data-aos-duration="1500" data-aos-delay="300">
        <hr />

        <span style={{ border: "solid" }}>
          <h3>우리의 발자취</h3>
          <h1>|</h1>
          <h5>Domevio는 어떻게 세상에 나왔는가</h5>
          <p>
            6명에 달하는 팀원이 각자 논문을 찾아보고, 여러 가정폭력 전담 부서에
            대해서 알아보고 가정폭력이 아직까지 이어지고 있는 것은 바로
            <b> 사람들의 인식</b> 때문이다! 라는 결론에 도달했습니다.
          </p>
          <h1>|</h1>
          <h5>2022년 1학기 현대사회이슈와 리더쉽</h5>
          <p>
            DomeVio는 문정화 교수님의 현대사회이슈와 리더쉽 강의의 팀별과제에서
            나온 서비스입니다
          </p>
        </span>
      </div>
      <hr />
      <h1 data-aos="zoom-out-up" data-aos-duration="1500" data-aos-delay="400">
        What's next?
      </h1>
      <br />
      <br />
      <br />

      <FooterComponent />
    </div>
  );
}
