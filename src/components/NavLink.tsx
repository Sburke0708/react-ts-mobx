import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../styles/colors';

export default styled(NavLink)`
  font-size: 16px;
  font-weight: 400;
  color: ${colors.yellowLight};
  &:hover {
    background: red;
    text-decoration: none;
  }
`;