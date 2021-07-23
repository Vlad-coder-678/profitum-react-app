import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { teamData } from "../data/teamData";

import AvatarEmployee from "../components/AvatarEmployee";
import { LangContext } from "../App";

const SectionOurTeam = styled.section`
  padding: 4rem 2rem 1rem;
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

const OurTeam = () => {
  const lang = React.useContext(LangContext);

  return (
    <SectionOurTeam id="team">
      <Title>{teamData.title[lang]}</Title>
      <Content>
        {teamData.content.map((employee) => (
          <NavLink key={employee.route} to={employee.route}>
            <AvatarEmployee employee={employee} isHover={true} lang={lang} />
          </NavLink>
        ))}
      </Content>
    </SectionOurTeam>
  );
};

export default OurTeam;
