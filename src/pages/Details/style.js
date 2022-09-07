import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  main {
    max-width: 1336px;
    padding-top: 50px;
    margin: 0 auto;

    > label {
      display: grid;
      grid-template-columns: 1fr 3fr 1fr;
      gap: 40px;
      align-items: center;

      h1 {
        font-size: 2rem;
        font-weight: 400;
      }
    }
  }
`;

export const Content = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 40px 0;
  padding: 32px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-radius: 10px;

  &:hover {
    transition: 0.5s;
    box-shadow: 3px 3px 10px -3px ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;
  gap: 10px;
`;
