import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "../images/logo_header.png";

const WrapperLogo = styled.div`
  width: 200px;
  height: 40px;
`;

const LogoLink = styled(Link)`
  width: 100%;
  height: 100%;
`;

const LogoImg = styled.img`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Logo = () => {
  return (
    <WrapperLogo>
      <LogoLink to={"/"}>
        <LogoImg src={logo} alt={"logo"} />
      </LogoLink>
    </WrapperLogo>
  );
};

export default Logo;
