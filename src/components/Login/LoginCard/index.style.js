import styled, { keyframes } from "styled-components";

const slideup = keyframes`
from{
  transform:translateY(0px)
}
to{
  transform:translateY(-370px)
}
`;

export const LoginSection = styled.main`
  position: fixed;
  bottom: -100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.up {
    animation-duration: 0.5s;
    animation-timing-function: ease-out;
    animation-name: ${slideup};
    animation-fill-mode: forwards;
  }
`;

export const LoginBtn = styled.button`
  width: 322px;
  height: 44px;
  background: ${props => props.theme.palette["white"]};
  color: ${props => props.theme.palette["black"]};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 44px;
  margin-top: 10px;
`;
