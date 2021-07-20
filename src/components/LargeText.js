import React from 'react';
import styled from 'styled-components';

const Container = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`;

const LargeText = ({ children }) => {
  return <Container> {children} </Container>;
};

export default LargeText;
