import React from "react";
import styled from "styled-components";

import Logo from "../components/Logo";
import NavMenu from "../components/NavMenu";

import { ACCENT_COLOR } from "../constants";
import { footerData } from "../data/footerData";

const WrapperSection = styled.section`
  width: 100%;
  height: 300px;
  background-color: ${ACCENT_COLOR};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WrapperMenu = styled.div`
  margin: 1rem 2rem;
`;

const Regulations = styled.p`
  color: #000d1a;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

const Footer = ({ lang }) => {
  return (
    <WrapperSection>
      <Logo />
      <WrapperMenu>
        <NavMenu lang={lang} isPrimary={true} />
      </WrapperMenu>
      <Regulations>{footerData.siteRules[lang]}</Regulations>
    </WrapperSection>
  );
};

export default Footer;
