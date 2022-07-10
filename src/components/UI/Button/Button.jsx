import styled from "styled-components";

const Button = styled.button`
  font-family: "Architects Daughter", cursive;
  padding: 0.1rem 0.1rem;
  border: 1px solid #8b005d;
  color: #8b005d;
  background: #ffeaa7;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #33afff;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }

  @media (min-width: 768px) {
    .button {
      width: auto;
    }
  }
`;

export default Button;
