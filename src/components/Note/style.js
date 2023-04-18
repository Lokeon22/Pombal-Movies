import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border: 0;
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 25px;

  &:hover {
    transition: 0.5s;
    box-shadow: 3px 3px 10px -3px ${({ theme }) => theme.COLORS.PINK};
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: initial;
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
    text-align: initial;
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    margin-top: 10px;
    max-width: 1200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > footer {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    text-align: initial;
    margin-top: 10px;
  }
`;
