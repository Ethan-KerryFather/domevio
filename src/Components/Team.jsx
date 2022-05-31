import React, { useEffect } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import AOS from "aos";
import "../style/Team.css";
import FooterComponent from "./Footer";
export default function Team() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div>
      <ListGroup>
        <ListGroupItem
          color="success"
          id="persons"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <h3>임수원</h3>
          <p>소프트웨어학부</p>
        </ListGroupItem>
        <ListGroupItem
          color="info"
          id="persons"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <h3>강지인</h3>
          <p>화학공학과</p>
        </ListGroupItem>
        <ListGroupItem
          color="warning"
          id="persons"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          <h3>김준현</h3>
          <p>회계학과</p>
        </ListGroupItem>
        <ListGroupItem
          color="danger"
          id="persons"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <h3>손지혜</h3>
          <p>소프트웨어학부</p>
        </ListGroupItem>
        <ListGroupItem
          color="success"
          id="persons"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <h3>유정원</h3>
          <p>영어영문학과</p>
        </ListGroupItem>
        <ListGroupItem
          color="info"
          id="persons"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <h3>레티타오늉</h3>
          <p>중어중문학과</p>
        </ListGroupItem>
      </ListGroup>

      <br />
      <br />
      <br />
      <FooterComponent />
    </div>
  );
}
