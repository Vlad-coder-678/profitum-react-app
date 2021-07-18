import React from 'react';
import styled from 'styled-components';
import { teamData } from '../data/teamData';
import { ACCENT_COLOR } from '../constants';

const SectionAboutUs = styled.section`
  padding: 1rem 2rem;
  position: relative;
`;

const Title = styled.h2`
  width: 100%;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 2rem;
`;

const CardWrapper = styled.div`
  width: 100%;
  max-width: 250px;
  text-align: center;
  position: relative;
  margin: 1rem 2rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transition: 0.3s ease-in-out;
    color: ${ACCENT_COLOR};
    &::before {
      transition: 0.3s ease-in-out;
      background-color: #000d1a;
      border: 2px solid ${ACCENT_COLOR};
    }
    img {
      transform: scale(103%);
      transition: 0.3s ease-in-out;
    }
  }
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 75%;
    background-color: ${ACCENT_COLOR};
    z-index: -1;
    transition: 0.3s ease-in-out;
  }
`;

const CardOfEmployee = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    line-height: 40px;
    color: #000d1a;
  }
  p {
    line-height: 40px;
    margin-bottom: 1rem;
    font-size: 1rem;
    color: #fff;
  }
`;

const WrapImg = styled.div`
  width: 100%;
  height: 350px;
  margin-bottom: 1rem;
  transform: translateX(-5%);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s ease-in-out;
  }

  @media screen and(max-width: 768px) {
    height: 300px;
  }
`;

const AboutUs = () => {
  return (
    <SectionAboutUs>
      <Title>Наша команда</Title>
      <Content>
        {teamData.map((employee, id) => (
          <CardWrapper key={id}>
            <CardOfEmployee>
              <WrapImg>
                <img src={employee.imageSection} alt={employee.desc} />
              </WrapImg>
              <h4>{employee.title}</h4>
              <p>{employee.desc}</p>
            </CardOfEmployee>
          </CardWrapper>
        ))}
      </Content>
    </SectionAboutUs>
  );
};

export default AboutUs;
