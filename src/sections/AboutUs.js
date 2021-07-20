import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { teamData } from '../data/teamData';

import CardOfEmployee from '../components/CardOfEmployee';

const SectionAboutUs = styled.section`
  padding: 1rem 2rem;
  position: relative;

  @media screen and (max-width: 768px) {
    padding: 1rem 0rem;
  }
`;

const Title = styled.h2`
  width: 100%;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 0rem;
  }
`;

const AboutUs = () => {
  return (
    <SectionAboutUs id="about_us">
      <Title>Наша команда</Title>
      <Content>
        {teamData.map((employee) => (
          <NavLink key={employee.route} to={employee.route}>
            <CardOfEmployee employee={employee} isHover={true} />
          </NavLink>
        ))}
      </Content>
    </SectionAboutUs>
  );
};

export default AboutUs;
