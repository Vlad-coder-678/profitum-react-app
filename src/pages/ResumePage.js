import React from 'react';
import styled from 'styled-components';
import Resume from '../components/Resume';
import { Button } from '../components/Button';

import { IoArrowBack } from 'react-icons/io5';
import ScrollToTop from '../components/ScrollToTop';
import { NavLink } from 'react-router-dom';

const ResumeContainer = styled.div`
  position: relative;
  background: rgba(0, 0, 0, 0.1);
  transition: 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: row;
  padding-top: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 0.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  z-index: 100;
`;

const ArrowBackIcon = styled(IoArrowBack)`
  width: 50px;
  height: 50px;
  color: #000d1a;
  cursor: pointer;
  background: #cd853f;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
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

const CardWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 4rem;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    min-height: 40%;
    background-color: #cd853f;
    border-radius: 10px;
    z-index: -1;
  }
`;

const Card = styled.div`
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WrapImage = styled.div`
  width: 100%;
  height: 350px;
  margin: 1rem;
  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and(max-width: 768px) {
    height: 300px;
  }
`;

const Content = styled.div`
  h3 {
    line-height: 40px;
    font-size: 1.5rem;
    color: #000d1a;
  }
  p {
    line-height: 40px;
    margin-bottom: 1rem;
    font-size: 1rem;
    color: #fff;
  }
`;

const ResumePage = ({ employee }) => {
  return (
    <ResumeContainer>
      <ScrollToTop />
        <Icon>
          <ArrowBackIcon />
        </Icon>
      <ContentLeft>
        <CardWrapper>
          <Card>
            <WrapImage>
              <img src={employee.imageSlider} alt={employee.alt} />
            </WrapImage>
            <Content>
              <h3>{employee.title}</h3>
              <p>{employee.desc}</p>
            </Content>
          </Card>
        </CardWrapper>
        <Button primary="true" to="./contact">
          Contact Us
        </Button>
      </ContentLeft>
      <ContentRight>
        <Resume resume={employee.resume} />
      </ContentRight>
    </ResumeContainer>
  );
};

export default ResumePage;
