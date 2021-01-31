import styled from "styled-components";
import React from "react";

const Input = styled.input`
  width: 100%;
  height: 38px;
  font-size: 15px;
  text-transform: uppercase;
  color: white;
  padding: 10px;
  outline: 0px;
  margin-bottom: 15px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRaius};
  background-color: transparent;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`;
export default function QuizInput( { onChange, placeholder, ...props }) {
  return (
    <div>
      <Input 
      onChange={onChange} 
      placeholder={placeholder}
      autocomplete="off"
      {...props}
      />
    </div>
  
  );
}