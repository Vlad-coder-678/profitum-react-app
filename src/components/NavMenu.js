import React from "react";
import styled from "styled-components";

import { menuData } from "../data/headerData";
import { ACCENT_COLOR } from "../constants";

const WrapperNavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${({ primary }) => (primary ? "#000d1a" : ACCENT_COLOR)};
  }
`;

const NavMenu = ({ lang, isPrimary }) => {
  return (
    <WrapperNavMenu>
      {menuData.map((item) => (
        <NavLink key={item.link} href={item.link} primary={isPrimary}>
          {item.title[lang]}
        </NavLink>
      ))}
    </WrapperNavMenu>
  );
};

export default NavMenu;
