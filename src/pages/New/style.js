import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 1336px;
  padding-top: 48px;
  margin: 0 auto;

  > a {
    max-width: 100px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  h1 {
    font-size: 2.25rem;
    font-weight: 500;
    margin-top: 24px;
    margin-bottom: 40px;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    margin-bottom: 24px;
  }
`;

export const Inputs = styled.div`
  display: flex;
  gap: 40px;
`;

export const TagsButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;
  margin-bottom: 56px;
`;

export const FinalButtons = styled.div`
  display: flex;
  gap: 40px;

  button:nth-child(1) {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;
