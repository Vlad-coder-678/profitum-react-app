import React from "react";
import styled from "styled-components";
import { teamData } from "../data/teamData";
import DropdownSlider from "./DropdownSlider";

const SectionAboutUs = styled.section`
  padding: 1rem 2rem;
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

const CardOfEmployee = styled.div`
  flex-basis: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  margin: 1rem 2rem;
  text-align: center;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.5),
    0px 0px 10px 1px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  @media screen and (max-width: 768px) {
    flex-basis: 45%;
    padding: 0.5rem;
    margin: 0.5rem;
  }
  h4 {
    margin: 1rem 0rem;
    line-height: 1.4;
  }
  p {
    margin: 1rem 0rem;
  }
`;

const WrapImg = styled.div`
  width: 180px;
  height: 250px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
  @media screen and (max-width: 768px) {
    width: 120px;
    height: 150px;
  }
`;

const AboutUs = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [active, setActive] = React.useState(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const setCurr = (active) => {
    setActive(active);
  };

  return (
    <SectionAboutUs>
      <Title>Наша команда</Title>
      <Content>
        {teamData.map((employee, id) => (
          <CardOfEmployee
            onClick={() => {
              setActive(id);
              toggle();
            }}
          >
            <WrapImg>
              <img src={employee.imageSection} alt={employee.desc} />
            </WrapImg>
            <h4>{employee.title}</h4>
            <p>{employee.desc}</p>
          </CardOfEmployee>
        ))}
      </Content>
      <DropdownSlider
        isOpen={isOpen}
        toggle={toggle}
        setCurr={setCurr}
        active={active}
        teamData={teamData}
      />
    </SectionAboutUs>
  );
};

export default AboutUs;
