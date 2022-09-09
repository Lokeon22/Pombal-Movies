import styled from "styled-components";

export const Container = styled.p`
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.PINK};
  margin-top: 48px;
  opacity: 0.45;
`;
