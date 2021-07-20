import React from "react";
import styled from "styled-components";

import { Button } from "../components/Button";
import ScrollToTop from "../components/ScrollToTop";
import CardOfEmployee from "../components/CardOfEmployee";
import ResumeSection from "../components/ResumeSection";
import ResumeDropdownSlider from "../components/ResumeDropdownSlider";

import { FaTimes } from "react-icons/fa";

const ResumeContainer = styled.div`
  position: relative;
  background: rgba(0, 0, 0, 0.1);
  transition: 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: row;
  padding-top: 5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Icon = styled.div`
  position: fixed;
  top: 4rem;
  right: 1rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  z-index: 100;
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

const ContentLeft = styled.div`
  flex-basis: 35%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    max-width: 300px;
    flex-basis: 95%;
  }
`;

const ContentRight = styled.div`
  flex-basis: 60%;
  margin-left: 0.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 768px) {
    flex-basis: 90%;
    flex-direction: column;
    margin-left: 0rem;
  }
`;

const ResumePage = ({ employee }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [doc, setDoc] = React.useState(null);
  const [alt, setAlt] = React.useState(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const setNeededDoc = (doc) => {
    setDoc(doc);
  };
  const setNeededAlt = (alt) => {
    setAlt(alt);
  };

  return (
    <ResumeContainer>
      <ScrollToTop />
      <a href="/#about_us">
        <Icon>
          <ArrowBackIcon />
        </Icon>
      </a>
      <ContentLeft>
        <CardOfEmployee employee={employee} isHover={false} />
        <Button primary="true" to="./contact">
          Contact Us
        </Button>
      </ContentLeft>
      <ContentRight>
        <ResumeSection
          resume={employee.resume}
          toggle={toggle}
          setNeededDoc={setNeededDoc}
          setNeededAlt={setNeededAlt}
        />
      </ContentRight>
      <ResumeDropdownSlider
        toggle={toggle}
        isOpen={isOpen}
        doc={doc}
        alt={alt}
      />
    </ResumeContainer>
  );
};

export default ResumePage;
