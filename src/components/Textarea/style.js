import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 40px 0;

  > textarea {
    width: 100%;
    min-height: 274px;
    padding: 12px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    resize: none;
    border: 0;
    border-radius: 10px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }
`;
