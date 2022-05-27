import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../style/NavStyle.css";
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
          가정폭력
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
              <NavLink>Guide</NavLink>
            </NavItem>

            <NavItem
              style={{ margin: "10px" }}
              onClick={() => {
                //history.push("/ExamMarket");
              }}
              id="navHover"
            >
              <NavLink>REPORT</NavLink>
            </NavItem>

            <NavItem
              style={{ margin: "10px" }}
              onClick={() => {
                //history.push("/ExamSquare/ArticleList");
              }}
              id="navHover"
            >
              <NavLink>가정폭력 게시판</NavLink>
            </NavItem>

            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav style={{ margin: "10px" }}>
                Team소개
              </DropdownToggle>
              <DropdownMenu end id="navOptions">
                <DropdownItem
                  onClick={() => {
                    //history.push("/introduce/Team");
                  }}
                >
                  About Project
                </DropdownItem>

                <DropdownItem onClick={() => history.push("/")}>
                  팀소개
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          <NavbarText
            style={{ fontSize: "xx-small", margin: "20px 10px 10px 0px" }}
          >
            2022 현대교양 프로젝트
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
