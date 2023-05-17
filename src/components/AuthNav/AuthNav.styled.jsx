import { NavLink } from "react-router-dom";
import styled from '@emotion/styled'

export const StyledLink = styled(NavLink)`
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  padding: 8px;
  margin-right: 8px;

  border: none;
  text-decoration: none;
  background-color: transparent;
  color: white;
  font-size: 20px;

  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: 10px 5px 5px grey;
  }
`;
// const StyledLink = styled(NavLink)`
//   color: blue;
//   font-size: 20px;
//   margin-left: 10px;
//   text-decoration: none;
//   &.active {
//     color: red;
//   }
// `

