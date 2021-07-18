import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ACCENT_COLOR } from '../constants';

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? '#000d1a' : ACCENT_COLOR)};
  font-weight: 700;
  white-space: nowrap;
  outline: none;
  border: 1px solid #000;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
  color: ${({ primary }) => (primary ? '#fff' : '#000d1a')};
  font-size: ${({ big }) => (big ? '20px' : '14px')};
  border: 1px solid ${({ primary }) => (primary ? '#000d1a' : ACCENT_COLOR)};
  &:hover {
    background: ${({ primary }) => (primary ? ACCENT_COLOR : '#000d1a')};
    color: ${({ primary }) => (primary ? '#000d1a' : ACCENT_COLOR)};
    border: 1px solid ${({ primary }) => (primary ? '#000d1a' : ACCENT_COLOR)};
  }
`;
