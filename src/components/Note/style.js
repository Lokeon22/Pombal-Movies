import styled from "styled-components";

export const Container = styled.div`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 8px;
  }

  svg {
    font-size: 18px;
    color: ${({ theme }) => theme.COLORS.PINK};

    &:hover {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  p {
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    margin-top: 10px;
  }
`;
