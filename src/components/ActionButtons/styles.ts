import styled from 'styled-components';
import { shade } from 'polished';

export const CentralizedButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background-color: #88FCA3;
  color: #000;
  cursor: pointer;
  z-index: 2;
  margin-left: 2px;
  box-shadow: 0 0 5px 0 rgba(0,0,0,0.4);
  height: 30px;
  width: 70px;
  font-weight: bold;
  font-size: 12px;
  border: 1px solid transparent;

  &:hover {
    background: ${shade(0.2, '#88FCA3')}
  }
`;