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
  margin: 50px 0;
  padding: 32px;
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;
  gap: 10px;
`;
