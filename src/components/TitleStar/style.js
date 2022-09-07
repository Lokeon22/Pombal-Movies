import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 0;
  gap: 8px;

  h2 {
    font-size: 2.25rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};

    &:hover {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;
