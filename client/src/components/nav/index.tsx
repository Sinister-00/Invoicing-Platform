import Button from 'components/button';
import { LOCAL_STORAGE_KEYS } from 'entities/local-storage';
import { ROUTES } from 'entities/routes';
import { useState } from 'react';
import { CgClose, CgMenu } from 'react-icons/cg';
import { FiShoppingCart } from 'react-icons/fi';
import { NavLink, useNavigate } from 'react-router-dom';
import useCartStore from 'store/useCartStore';
import useUserStore from 'store/useUser';

import NavWrapper from './wrapper';

const Nav = () => {
  const navigate = useNavigate();
  const { userData, resetUser } = useUserStore();
  const [menuIcon, setMenuIcon] = useState(false);
  const { total_item } = useCartStore();

  const isLoggedIn = !!userData.name;

  const login = () => {
    navigate(ROUTES.LOGIN, {
      replace: true,
    });
    navigate(0);
  };

  const logout = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.USER);
    resetUser();
    navigate(ROUTES.HOME, {
      replace: true,
    });
    navigate(0);
  };

  return (
    <NavWrapper>
      <div className={menuIcon ? 'navbar active' : 'navbar'}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to={ROUTES.HOME}
              className="navbar-link "
              onClick={() => setMenuIcon(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}
            >
              Products
            </NavLink>
          </li>

          {isLoggedIn ? (
            <>
              <h3>User: {userData.name}</h3>
              <Button onClick={() => logout()}>Log Out</Button>
            </>
          ) : (
            <Button onClick={() => login()}>Log In</Button>
          )}

          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item"> {total_item} </span>
            </NavLink>
          </li>
        </ul>

        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </NavWrapper>
  );
};

export default Nav;
