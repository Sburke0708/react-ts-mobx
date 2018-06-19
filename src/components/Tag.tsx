import styled from 'styled-components';
import colors from '../styles/colors';

export default styled.span`
  background-color: ${colors.redLight};
  border: 2px solid ${colors.white};
  color: ${colors.white};
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 20px;
  width: max-content;
  height: 50px;
  display: flex;
  align-items: center;
`;