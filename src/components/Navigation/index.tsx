import * as React from 'react';
import NavLink from '../NavLink';
import MainNavigation from '../MainNavigation';

import './index.css';

const Navigation: React.SFC = () => {
  return (
    <MainNavigation>
      <ul className="main-navigation">
        <li className="logo">
          <NavLink to="/">
            <h1>Beer Store</h1>
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
}

export default Navigation;