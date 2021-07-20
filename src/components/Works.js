import React from 'react';
import styled from 'styled-components';
import { LangContext } from '../App';
import { worksData } from '../data/worksData';

const SectionWorks = styled.section`
  padding: 1rem 2rem;
  position: relative;
`;

const Title = styled.h2`
  width: 100%;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2rem;
`;

const ContentItem = styled.div`
  width: 20%;
  text-align: center;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 3rem;
  @media screen and (max-width: 1300px) {
    width: 50%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    padding-right: 0px;
    padding-left: 0px;
  }
`;

const Works = () => {
  const lang = React.useContext(LangContext);

  return (
    <SectionWorks id="works">
      <Title>Мы работаем:</Title>
      <Content>
        {worksData.map((item, index) => (
          <ContentItem key={index}>{item.text[lang]}</ContentItem>
        ))}
      </Content>
    </SectionWorks>
  );
};

export default Works;