import React from "react";
import styled from "styled-components";

import { ACCENT_COLOR } from "../constants";

const CardResume = styled.div`
  width: 95%;
  background-color: #fff;
  margin: 0.5rem 1rem;
  text-align: start;
  padding: 1rem 1.5rem;
  align-self: start;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  box-shadow: 5px 5px 0px 0px ${ACCENT_COLOR};

  &:hover {
    transition: 0.3s ease-in-out;
    box-shadow: 5px 5px 0px 0px #000;
  }

  @media screen and (max-width: 768px) {
    width: auto;
    padding: 1rem;
    margin: 1rem;
  }
`;

const Title = styled.h4`
  font-size: 1rem;
  color: ${ACCENT_COLOR};
  margin-bottom: 1.5rem;
`;

const WrapContent = styled.div`
  margin: 1rem 0;
`;
const WrapDate = styled.p`
  font-size: 0.9rem;
  margin: 0.5rem 0;
`;
const WrapLoc = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    font-weight: 600;
  }
`;
const WrapVoc = styled.p`
  font-size: 0.9rem;
  margin: 0.5rem 0;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
const WrapDesc = styled.p`
  margin: 0.5rem 0;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const WrapDoc = styled.div`
  position: relative;
  width: 100%;
  height: 400px;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ResumeCard = ({ resumeOfEmployee, toggle, setDoc, setAlt }) => {
  const handleclick = (event) => {
    setDoc(event.target.src);
    setAlt(event.target.alt);
    toggle();
  };

  return (
    <CardResume>
      <Title>{resumeOfEmployee.title}</Title>
      {resumeOfEmployee.content.map((item, index) => (
        <WrapContent key={index}>
          <WrapLoc>{item.location}</WrapLoc>
          <WrapDate>{item.date}</WrapDate>
          <WrapVoc>{item.vocation}</WrapVoc>
          <WrapDesc>{item.desc}</WrapDesc>
          {item.doc ? (
            <WrapDoc onClick={handleclick}>
              <img src={item.doc} alt={item.alt} />
            </WrapDoc>
          ) : null}
        </WrapContent>
      ))}
    </CardResume>
  );
};

export default ResumeCard;
