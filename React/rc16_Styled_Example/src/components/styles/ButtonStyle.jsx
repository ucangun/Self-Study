import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ secondary }) => (secondary ? "#a62440" : "white")};
  color: ${({ primary }) => primary || "white"};
  border: 1px solid #a62440;
  border-radius: 5px;
  padding: 1rem 1.2rem;
  font-size: 1.1rem;
  margin: 2rem 0.5rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 0.9;
    transform: scale(0.95);
  }
`;

export const DetailButton = styled(Button)`
  border-left: 3px solid blue;
  border-radius: 20px 0 20px 0;
  background-color: #fff;
  color: tomato;
`;

export default Button;
