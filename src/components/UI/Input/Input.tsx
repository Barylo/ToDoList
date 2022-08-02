import styled from "styled-components";

const Input = styled.input`
  display: inline-block;
  width: 100%;
  border: 3px solid #ccc;
  font-family: "Architects Daughter", cursive;
  line-height: 1rem;
  padding: 0 0.25rem;

  &:focus {
    outline: none;
    background: #fdcb6e;
    border-color: #8b005d;
  }
`;

export default Input;
