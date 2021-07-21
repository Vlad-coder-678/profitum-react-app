import React from 'react';
import styled from 'styled-components';

import { ACCENT_COLOR } from '../constants';

const CardWrapper = styled.div`
  width: 100%;
  max-width: 250px;
  text-align: center;
  position: relative;
  margin: 1rem 2rem;
  cursor: ${({ isHover }) => (isHover ? 'pointer' : 'default')};
  transition: 0.3s ease-in-out;

  &:hover {
    ${({ isHover }) =>
      isHover
        ? `transition: 0.3s ease-in-out;
  
    &::before {
      transition: 0.3s ease-in-out;
      background-color: #000d1a;
      border: 2px solid ${ACCENT_COLOR};
    }
    img {
      transform: scale(103%);
      transition: 0.3s ease-in-out;
    }
    h3{
      color: ${ACCENT_COLOR};
    }
    `
        : 'transition: 0.3s ease-in-out;'}
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 75%;
    background-color: ${ACCENT_COLOR};
    transition: 0.3s ease-in-out;
  }
`;

const CardEmployee = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    line-height: 40px;
    color: #000d1a;
    z-index: 1;
  }
  p {
    line-height: 40px;
    margin-bottom: 1rem;
    font-size: 1rem;
    color: #fff;
    z-index: 1;
  }
`;

const WrapImg = styled.div`
  width: 100%;
  height: 350px;
  margin-bottom: 1rem;
  transform: translateX(-5%);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s ease-in-out;
  }

  @media screen and(max-width: 768px) {
    height: 300px;
  }
`;

const CardOfEmployee = ({ employee, isHover }) => {
  return (
    <CardWrapper isHover={isHover}>
      <CardEmployee>
        <WrapImg>
          <img src={employee.imageSection} alt={employee.desc} />
        </WrapImg>
        <h3>{employee.title}</h3>
        <p>{employee.desc}</p>
      </CardEmployee>
    </CardWrapper>
  );
};

export default CardOfEmployee;
