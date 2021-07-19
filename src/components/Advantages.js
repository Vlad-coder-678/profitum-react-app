import React from 'react';
import styled from 'styled-components';
import { LangContext } from '../App';
import { advantagesData } from '../data/advantagesData';
import AdvantagesItem from './AdvantagesItem';

const SectionAdvantages = styled.section`
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

const Advantages = () => {
  const lang = React.useContext(LangContext);

  return (
    <SectionAdvantages id="advantages">
      <Title>Наши преимущества</Title>
      <Content>
        {advantagesData.map((advantage, index) => (
          <AdvantagesItem
            key={index}
            img={advantage.img}
            text={advantage.text[lang]}
          />
        ))}
      </Content>
    </SectionAdvantages>
  );
};

export default Advantages;
