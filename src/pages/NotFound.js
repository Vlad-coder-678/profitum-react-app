import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {Button} from '../components/Button';

const NotFound = () => {
  const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 800px;
    background-color: $light;
    border: 1px solid #000;
    text-align: center;
    margin: 1rem;
    padding: 2rem 2rem 3rem;
    @media (max-width: 750px) {
      position: static;
      transform: translate(0, 0);
    }
  `;

  const Text = styled.p`
    padding: 0 1rem 0.5rem;
  `;

  return (
    <Container>
      <Text>К сожалению, такой страницы нет :(</Text>
      <NavLink to="/">
        <Button primary="true" to={'/'}>
          Перейти на главную
        </Button>
      </NavLink>
    </Container>
  );
};

export default NotFound;
