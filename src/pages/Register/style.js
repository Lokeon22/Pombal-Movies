import styled from "styled-components";

import BackgroundImg from "../../assets/projetoteste.png";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
`;

export const Grid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 650px 1fr;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;

    section {
      display: none;
    }
  }

  > form {
    max-width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    gap: 8px;

    h1 {
      font-size: 3rem;
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    p {
      font-size: 0.9rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    h2 {
      font-size: 1.5rem;
      font-weight: 500;
      margin: 40px 0;
    }

    button {
      margin-top: 24px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  opacity: 0.3;
  background: url(${BackgroundImg}) no-repeat center center;
  background-size: cover;
`;
