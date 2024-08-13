import styled from "styled-components";

const Button = styled.button`
  font-family: "tahoma";
  display: inline-block;
  padding: 1rem 1.5rem;
  background-color: ${({ primary, secondary }) =>
    primary ? "lightblue" : secondary ? "aqua" : "brown"};

  color: ${({ primary }) => (primary ? "red" : "blue")};
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(0.9);
  }
`;

export const TomatoButton = styled(Button)`
  background-color: aquamarine;
  color: tomato;
  width: ${({ tertiary }) => (tertiary ? "400px" : "300px")};
`;

export default Button;
