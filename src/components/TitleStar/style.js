import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 5px;
  margin-right: 0;
  margin-left: 0;

  h2 {
    font-size: 2.25rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;
