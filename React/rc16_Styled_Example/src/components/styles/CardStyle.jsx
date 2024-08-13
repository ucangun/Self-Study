import styled from "styled-components";

const CardStyle = styled.div`
  background-color: aquamarine;
  border-radius: 15px;
  margin-bottom: 2rem;
  gap: 2rem;
  padding: 60px;
  display: flex;
  flex-direction: ${({ umut }) => umut || "row"};
`;

export default CardStyle;
