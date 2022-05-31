import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../style/NavStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faHandcuffs,
  faHandHolding,
  faPeopleGroup,
  faAtom,
} from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  return (
    <div>
      <Navbar
        expand="lg"
        color="light"
        light
        style={{ backgroundColor: "#E6FAFF" }}
      >
        <NavbarBrand href="/" style={{ fontFamily: "fantasy" }}>
          DomeVio &nbsp;
          <FontAwesomeIcon icon={faHouse} />
        </NavbarBrand>
        <NavbarToggler
          className="me-2"
          onClick={() => {
            console.log(isOpen);
            setIsOpen(!isOpen);
            console.log(isOpen);
          }}
        />
        <Collapse navbar isOpen={isOpen}>
          <Nav className="me-auto" navbar>
            <NavItem
              style={{ margin: "10px" }}
              onClick={() => {
                history.push("/Guide");
              }}
              id="navHover"
            >
              <NavLink>
                가정폭력 신고 가이드 &nbsp;
                <FontAwesomeIcon icon={faHandHolding} />
              </NavLink>
            </NavItem>

            <NavItem
              style={{ margin: "10px" }}
              onClick={() => {
                history.push("/ExamSquare/ArticleList");
              }}
              id="navHover"
            >
              <NavLink>
                가정폭력 신고 게시판 &nbsp;
                <FontAwesomeIcon icon={faHandcuffs} />
              </NavLink>
            </NavItem>

            <NavItem
              style={{ margin: "10px" }}
              onClick={() => {
                history.push("/ExamSquare/New");
              }}
              id="navHover"
            >
              <NavLink>
                신규기능 Test &nbsp;
                <FontAwesomeIcon icon={faAtom} />
              </NavLink>
            </NavItem>

            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav style={{ margin: "10px" }}>
                DomeVio 소개 &nbsp;
                <FontAwesomeIcon icon={faPeopleGroup} />
              </DropdownToggle>
              <DropdownMenu end id="navOptions">
                <DropdownItem
                  onClick={() => {
                    history.push("/ExamSquare/Project");
                  }}
                >
                  About Project
                </DropdownItem>

                <DropdownItem onClick={() => history.push("/ExamSquare/Team")}>
                  팀소개
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          <NavbarText
            style={{ fontSize: "xx-small", margin: "20px 10px 10px 0px" }}
          >
            2022 현대사회이슈와 공동체리더십
          </NavbarText>
        </Collapse>
      </Navbar>
      <br />
      <br />
      <hr />
      <br />
    </div>
  );
}
