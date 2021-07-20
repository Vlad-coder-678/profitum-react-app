import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { menuData } from "../data/headerData";
import { contactUsBtn } from "../data/buttons";

import { LangContext } from "../App";
import { Button } from "./Button";
import LangSelect from "./LangSelect";

import { FaTimes } from "react-icons/fa";

const DropdownContainer = styled.div`
  position: fixed;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  background: #cd853f;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  z-index: 999;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
const CloseIcon = styled(FaTimes)`
  color: #000d1a;
`;

const DropdownWrapper = styled.div``;
const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;
  @media screen and (max-screen: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;

const DropdownLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    color: #000d1a;
  }
`;
const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const WrapLangSelect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  margin: 0 auto;
`;

const Dropdown = ({ isOpen, toggle, setLang }) => {
  const lang = React.useContext(LangContext);

  const handlerOnLangClick = (event) => {
    event.stopPropagation();
  };

  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item, index) => (
            <DropdownLink to={item.link} key={index}>
              {item.title[lang]}
            </DropdownLink>
          ))}
          <WrapLangSelect onClick={handlerOnLangClick}>
            <LangSelect setLang={setLang} lang={lang} />
          </WrapLangSelect>
        </DropdownMenu>
        <BtnWrap>
          <Button primary="true" round="true" big="true" to="./contact">
            {contactUsBtn[lang]}
          </Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
