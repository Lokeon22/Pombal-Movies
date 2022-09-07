import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border: 0;
  border-radius: 10px;

  display: flex;
  align-items: center;

  > input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: 0;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    padding: 12px;
  }

  > svg {
    margin-left: 15px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;
