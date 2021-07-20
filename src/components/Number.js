import React from 'react';
import styled from 'styled-components';
import { ACCENT_COLOR } from '../constants';

const Container = styled.span`
  color: ${ACCENT_COLOR};
`;

const Number = ({ number }) => {
  return <Container>{number}</Container>;
};

export default Number;
