import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;

  > header {
    width: 100%;
    height: 136px;
    padding: 32px;
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 144px;
    gap: 8px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  main {
    max-width: 350px;
    padding-top: 50px;
    margin: 0 auto;

    div:nth-child(2) {
      margin-bottom: 20px;
    }

    div:nth-child(4) {
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: 640px) {
    > main {
      > div {
        padding: 0px 10px;
      }
    }
  }
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Avatar = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  margin: -100px auto 40px;

  img {
    position: relative;
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }

  > label {
    position: absolute;

    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    bottom: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 22px;
      height: 22px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      cursor: pointer;
    }

    input {
      display: none;
    }
  }
`;
