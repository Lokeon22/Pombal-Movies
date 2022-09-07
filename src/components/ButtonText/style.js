import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  color: ${({ theme }) => theme.COLORS.PINK};
  margin-top: 42px;
  text-align: center;
`;
