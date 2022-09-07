import styled from "styled-components";

export const Container = styled.span`
  padding: 5px 16px;
  font-size: 0.8rem;
  border-radius: 10px;
  margin-top: 15px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
`;
