import React, { useEffect } from "react";
import AOS from "aos";
import FooterComponent from "./Footer";
import "../style/Team.css";

export default function Project() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div style={{ lineHeight: "2" }} id="projectIntroduce">
      <h2
        data-aos="zoom-out-up"
        data-aos-duration="1500"
        data-aos-delay="300"
        id="projectIntroduceTitle"
        color="Red"
      >
        안녕하세요!
      </h2>
      <hr />

      <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="800">
        <span style={{ border: "solid" }}>
          <h3 id="projectIntroduceTitle">DomeVio를 소개합니다!</h3>
          <i>Domestic Violence --> DomeVio</i>
          <p>가정폭력, 영어로 Domestic Violence입니다</p>
          <p>Dome+Vio 각 앞 글자를 따와서 DomeVio라는 이름을 부여하였습니다</p>
          <p>저희는 가정폭력에 대한 올인원 서비스를 지향합니다</p>
          <p>
            기존의 신고따로, 상담따로, 처벌따로, 후관리 따로의 가정폭력처리
            프로세스의 문제점을 해결하기 위해서 우리는 나왔습니다
          </p>
        </span>
      </div>

      <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="800">
        <hr />
        <span style={{ border: "solid" }}>
          <h3 id="projectIntroduceTitle">기능소개</h3>
          <h1>|</h1>
          <h5 id="projectIntroduceTitle2">가정폭력 게시판</h5>
          <p>
            가정폭력과 관련된 경험을 익명으로 공유하여 타 신고자에게 참조자료를
            제공합니다. 더불어 서로 간의 소통이 가능합니다
          </p>
          <h1>|</h1>
          <h5 id="projectIntroduceTitle2">Domevio 가이드</h5>
          <p>
            가정폭력 신고와 관련한 정보를 신고프로세스대로 정리하여, 신고자가
            어떤 행동을 해야할 지 정보를 제공합니다.
          </p>
        </span>
      </div>

      <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
        <hr />

        <span style={{ border: "solid" }}>
          <h3 id="projectIntroduceTitle">우리의 발자취</h3>
          <h1>|</h1>
          <h5 id="projectIntroduceTitle2">Domevio는 어떻게 세상에 나왔는가</h5>
          <p>
            6명에 달하는 팀원이 각자 논문을 찾아보고, 여러 가정폭력 전담 부서에
            대해서 알아보고 가정폭력이 아직까지 이어지고 있는 것은 바로
            <b> 사람들의 인식</b> 때문이다! 라는 결론에 도달했습니다.
          </p>
          <h1>|</h1>
          <h5 id="projectIntroduceTitle2">
            2022년 1학기 현대사회이슈와 리더쉽
          </h5>
          <b>
            DomeVio는 문정화 교수님의 현대사회이슈와 리더쉽 강의의 팀별과제에서
            나온 서비스입니다
          </b>
        </span>
      </div>

      <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
        <hr />

        <span style={{ border: "solid" }}>
          <h3 id="projectIntroduceTitle">Domevio가 제시하는 솔루션</h3>
          <h1>|</h1>
          <h5 id="projectIntroduceTitle2">우리가 책임진다</h5>
          <p>
            가정폭력의 접수부터 피해자들의 커뮤니티 형성을 통한 발언권 강화유도,
            그리고 타 기관, 단체들의 대리신고 종합허브hub로서 기능할 수
            있습니다.
          </p>
          <h1>|</h1>
          <h5 id="projectIntroduceTitle2">추가 부수효과</h5>
          <p>
            현재는 지자체별로 가정폭력 전담팀을 모두 다 따로 운영중입니다. 이
            경우에는 예산이 지자체 별로 모두 따로 들고, 중복되는 절차도
            존재하므로, 모든 신고를 종합해주고, 전달해주는 HUB가 런칭된다면
            국가의 관련 예산도 절약할 수 있고, 이 절약된 예산으로 다른
            추가지원을 꾀할 수 있습니다
          </p>
        </span>
      </div>
      <hr />
      <h1
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="400"
        style={{ color: "red" }}
        id="projectIntroduceTitle"
      >
        Hey! DomeVio!
        <br />
        What's next?
      </h1>
      <br />
      <br />
      <br />

      <FooterComponent />
    </div>
  );
}
