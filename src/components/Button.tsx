import * as React from 'react';

interface IButtonsProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: 'button';
}

export const Button: React.SFC<IButtonsProps> = (props) => <button {...props} type="button" />;