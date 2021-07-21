import React from "react";
import styled from "styled-components";

import { Button } from "../components/Button";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 90px 0;
`;

const Text = styled.p`
  padding: 4rem 0 1rem 0.5rem;
`;

const NotFound = () => {
  return (
    <Container>
      <Text>К сожалению, такой страницы нет :(</Text>
      <Button primary="true" href={"/"}>
        Перейти на главную
      </Button>
    </Container>
  );
};

export default NotFound;
