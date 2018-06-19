import styled from 'styled-components';
import colors from '../styles/colors';

interface IbuttonProps {
  primary?: boolean
}

export default styled.button`
  background-color: ${(props: IbuttonProps) => (props.primary ? colors.blueDark : "#110cc7")};
  border: 2px solid ${colors.grayLight};
  color: ${colors.white};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
`;