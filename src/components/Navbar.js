import React from "react";
import styled from "styled-components/macro";

import { LangContext } from "../App";
import { Button } from "./Button";
import LangSelect from "./LangSelect";
import Logo from "../components/Logo";
import NavMenu from "../components/NavMenu";

import { contactUsBtn } from "../data/buttons";
import Bars from "../images/bars.svg";

const Nav = styled.nav`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuBars = styled.i`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    background-image: url(${Bars});
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Languages = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({ toggle, setLang }) => {
  const lang = React.useContext(LangContext);

  return (
    <Nav>
      <MenuBars onClick={toggle} />
      <Logo />
      <NavMenu lang={lang} />
      <NavBtn>
        <Button href="/#contacts">{contactUsBtn[lang]}</Button>
      </NavBtn>
      <Languages>
        <LangSelect setLang={setLang} lang={lang} />
      </Languages>
    </Nav>
  );
};

export default Navbar;
