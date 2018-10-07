import styled from 'styled-components';
import colors from '../styles/colors';

interface IbuttonProps {
  primary?: boolean;
  negative?: boolean;
}

const Button = styled.button`
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

const ActionButton = styled(Button)`
  background-color: ${(props: IbuttonProps) => (props.negative ? colors.grayDark : colors.redLight)};
  padding: 10px 15px;
  &:hover {
    background-color: ${colors.redDark};
  }
`

export {
  ActionButton,
  Button,
}