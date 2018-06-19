import styled from 'styled-components';
import colors from '../styles/colors';

export default styled.article`
  background-color: ${colors.blueLight};
  display: grid;
  grid-template-columns: 
    [full-start] minmax(1em, 1fr) 
    [main-start] minmax(0, 56em) [main-end]
    minmax(1em, 1fr) [full-end];
  grid-gap: 1em;
  padding-top: 20px;
`;