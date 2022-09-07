import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 1336px;
  padding-top: 48px;
  margin: 0 auto;

  a {
    width: 80px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  p {
    margin-top: 40px;
    text-align: justify;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 24px 0;

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  img {
    max-width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
