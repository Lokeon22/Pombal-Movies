import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  height: 116px;
  padding: 30px 0;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const Form = styled.div`
  max-width: 1366px;
  display: grid;
  grid-template-columns: 1fr 1fr 200px;
  align-items: center;
  margin: 0 auto;
  padding: 0 12px;

  h1 {
    font-size: 1.5rem;
    padding: 0 5px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > svg {
    width: 50px;
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const Label = styled(Link)`
  width: 200px;
  display: flex;
  align-items: center;
  gap: 25px;

  div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 0.83rem;
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }

    p {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  img {
    width: 67px;
    height: 64px;
    border-radius: 50%;
  }
`;