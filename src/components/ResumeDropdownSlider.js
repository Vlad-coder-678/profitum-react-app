import React from "react";
import styled from "styled-components";

import { FaTimes } from "react-icons/fa";

const WrapperDropdown = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  max-height: 1100px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  overflow: hidden;
  z-index: 100;
`;

const Icon = styled.div`
  position: absolute;
  top: 4rem;
  right: 1rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  z-index: 101;
`;

const ArrowBackIcon = styled(FaTimes)`
  width: 50px;
  height: 50px;
  color: #000d1a;
  cursor: pointer;
  background: #cd853f;
  border-radius: 50px;
  padding: 10px;
  user-selected: none;
  transition: 0.3s;
  &:hover {
    background: #000d1a;
    color: #fff;
    transform: scale(1.05);
  }
`;

const WrapperImage = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const SlideImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ResumeDropdownSlider = ({ toggle, isOpen, doc, alt }) => {
  return (
    <WrapperDropdown onClick={toggle} isOpen={isOpen}>
      <Icon onClick={toggle}>
        <ArrowBackIcon />
      </Icon>
      <WrapperImage>
        <SlideImage src={doc} alt={alt} />
      </WrapperImage>
    </WrapperDropdown>
  );
};

export default ResumeDropdownSlider;
