import * as React from 'react';
import { observer } from 'mobx-react';
import NavLink from '../NavLink';
import MainNavigation from '../MainNavigation';

import './index.css';

interface INavigationProps {
  cartStore: {
    cartCount;
  }
}

const Navigation: React.SFC<INavigationProps> = observer(({ cartStore }) => {
  const { cartCount } = cartStore;
  return (
    <MainNavigation>
      <ul className="main-navigation">
        <li className="logo">
          <NavLink to="/">
            <h1>Beer Store</h1>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            Cart: {cartCount}
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </MainNavigation>
  );
})

export default Navigation;