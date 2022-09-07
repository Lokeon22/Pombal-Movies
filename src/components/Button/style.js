import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 48px;
  background: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-radius: 8px;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
