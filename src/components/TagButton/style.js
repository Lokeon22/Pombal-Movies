import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  > input {
    position: relative;
    border: ${({ isNew, theme }) =>
      isNew ? `1px dashed ${theme.COLORS.PINK}` : "none"};
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: ${({ isNew, theme }) =>
      isNew ? "none" : theme.COLORS.BACKGROUND_800};
    height: 56px;
    padding: 16px;
    border-radius: 10px;
  }

  > button {
    position: absolute;
    right: 7px;
    background: none;
    border: none;

    svg {
      width: 25px;
      height: 25px;
      color: ${({ theme, isNew }) =>
        isNew ? `${theme.COLORS.PINK}` : `${theme.COLORS.RED}`};
    }
  }
`;
