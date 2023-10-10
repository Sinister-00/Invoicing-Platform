import Nav from 'components/nav';
import { ROUTES } from 'entities/routes';
import { NavLink } from 'react-router-dom';

import HeaderWrapper from './wrapper';

const Header = () => {
  return (
    <HeaderWrapper>
      <NavLink to={ROUTES.HOME}>
        <img src="./images/logo.png" alt="my logo img" />
      </NavLink>
      <Nav />
    </HeaderWrapper>
  );
};

export default Header;
