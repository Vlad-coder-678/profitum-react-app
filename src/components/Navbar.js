import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import menuData from '../data/header.json';
import buttonText from '../data/button.json';
import { LangContext } from '../App';
import { Button } from './Button';
import Bars from '../images/bars.svg';
// import { FaBars } from "react-icons/fa";
import logo from '../images/logo_header.png';
import LangSelect from './LangSelect';

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const Logo = styled(Link)`
  position: relative;
  width: 200px;
  height: 40px;
`;

const LogoImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// const MenuBars = styled(FaBars)
//   display: none;

//   @media screen and (max-width: 768px) {
//     display: block;
//   }
// `;

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

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
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
      <Logo>
        <LogoImg src={logo} alt={'logo'} />
      </Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData[lang].map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact"> {buttonText[lang]}</Button>
      </NavBtn>
      <Languages>
        <LangSelect setLang={setLang} lang={lang} />
      </Languages>
    </Nav>
  );
};

export default Navbar;
