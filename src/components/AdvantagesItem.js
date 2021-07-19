import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { ACCENT_COLOR } from '../constants';

const Container = styled.div`
  width: 25%;
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

const Text = styled.p`
  padding-top: 2rem;
`;

const AdvantagesItem = ({ img, text }) => {
  return (
    <Container>
      <IconContext.Provider value={{ color: ACCENT_COLOR, size: '50px' }}>
        <div>{img}</div>
      </IconContext.Provider>

      <Text>{text}</Text>
    </Container>
  );
};

export default AdvantagesItem;
