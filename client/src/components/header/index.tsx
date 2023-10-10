import Nav from 'components/nav';
import { ROUTES } from 'entities/routes';
import { NavLink } from 'react-router-dom';

import image from '../../../resources/images/logo.png';
import HeaderWrapper from './wrapper';

const Header = () => {
  return (
    <HeaderWrapper>
      <NavLink to={ROUTES.HOME}>
        <img src={image} alt="my logo img" />
      </NavLink>
      <Nav />
    </HeaderWrapper>
  );
};

export default Header;
