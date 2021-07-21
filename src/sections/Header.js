import React from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";

const WrapperHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.35) 50%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const Header = ({ setLang }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <WrapperHeader>
      <Navbar toggle={toggle} setLang={setLang} />
      <Dropdown toggle={toggle} isOpen={isOpen} setLang={setLang} />
    </WrapperHeader>
  );
};

export default Header;
