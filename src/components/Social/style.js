import styled from "styled-components";

export const Container = styled.section`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 30px;
  text-align: center;

  ul {
    position: relative;
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 16px 0;
    gap: 15px;

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  label {
    position: relative;
    display: flex;
    gap: 10px;
    padding-top: 30px;

    p {
      font-size: 0.8rem;
      text-align: start;
    }

    strong {
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    span {
      text-align: center;
      font-size: 0.8rem;
      border-left: 1px solid white;
    }
  }
`;
