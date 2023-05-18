import { NavLink } from "react-router-dom";
import styled from '@emotion/styled'

export const StyledLink = styled(NavLink)`
 font-style: italic;
  font-weight: 600;
  padding: 8px;
  margin-right: 15px;
 font-size: 18px;
  border: none;
  text-decoration: none;
   background-color: #FFFF66;
  color: #013220;
  border-radius: 4px;

  &:hover,
  &:focus {
    background-color: #999900;
  }
`;

