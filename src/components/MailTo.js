import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ACCENT_COLOR } from '../constants';

const Container = styled.span`
  color: ${ACCENT_COLOR};
  font-weight: 700;
  text-transform: lowercase;
`;

const MailTo = ({ email }) => {
  return (
    <Link
      to="#"
      onClick={(event) => {
        window.location = `mailto:${email}`;
        event.preventDefault();
      }}
    >
      <Container>{email}</Container>
    </Link>
  );
};

export default MailTo;
