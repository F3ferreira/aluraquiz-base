import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  height: 35px;
  border-radius: 4px;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  border-style: none;
  margin-top: 10px;
  color: white;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    outline: 1px solid white;
  }

  &:disabled{
    background-color: #979797;
    cursor: not-allowed;
  }

  &.bouncy {
  transition: all 0.2s;
  animation:bouncy 5s infinite linear;
  position:relative;
  }
  @keyframes bouncy {
    0% { top:0em; }
    40% { top:0em; }
    43% { top:-0.9em; }
    46% { top:0em; }
    48% { top:-0.4em; }
    50% { top:0em; }
    100% { top:0em; }
  }
`;

export default Button;