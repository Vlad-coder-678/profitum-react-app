import React from "react";
import styled from "styled-components";
import { teamData } from "../data/teamData";

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
  max-width: 300px;
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  margin: 1rem;

  &:before {
    content: "";
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

const CardOfEmployee = styled.div`
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

const WrapImg = styled.div`
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

const AboutUs = () => {
  return (
    <SectionAboutUs>
      <Title>Наша команда</Title>
      <Content>
        {teamData.map((employee, id) => (
          <CardWrapper>
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
