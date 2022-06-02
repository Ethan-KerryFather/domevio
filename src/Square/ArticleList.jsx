import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import Board from "./Board";
import AOS from "aos";
import "../style/Team.css";
function ExamSquare() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div>
      <h3 data-aos="fade-up" data-aos-delay="300" id="projectIntroduceTitle">
        DomeVio 신고게시판
      </h3>
      <p data-aos="fade-up" data-aos-delay="300" id="projectIntroduce">
        모든 게시물은 익명으로 게시되며, 비밀, 신고란을 체크하시면 공개되지
        않으며 관련 신고팀이 접수하여 적절한 관할 기관에 연결해드립니다
      </p>
      <hr />

      <h5
        style={{ marginBottom: "2rem", marginTop: "5rem" }}
        id="projectIntroduce"
      >
        게시물 목록
      </h5>
      <Board />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default ExamSquare;
