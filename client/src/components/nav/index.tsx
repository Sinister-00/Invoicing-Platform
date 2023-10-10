import axios from 'axios';
import Button from 'components/button';
import { ROUTES } from 'entities/routes';
import React, { useEffect, useState } from 'react';
import { CgClose, CgMenu } from 'react-icons/cg';
import { FiShoppingCart } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import useCartStore from 'store/useCartStore';

import NavWrapper from './wrapper';

const API = 'http://localhost:4000/auth/login';
// const API = 'http://localhost:4000/auth/login';

const Nav = () => {
  const [userEmail, setUserEmail] = useState('');
  const [menuIcon, setMenuIcon] = useState(true);
  const { total_item } = useCartStore();
  const email = JSON.parse(localStorage.getItem('userEmail') || '');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token') || ' ';
        const headers = { Authorization: `Bearer ${token}` };
        const res = await axios.get(API, { headers });
        setUserEmail(res.data.email);
      } catch (e) {
        console.error('Failed to fetch user data:', e);
      }
    };
    fetchUserData();
  }, []);
  const redirectToHome = () => {
    window.location.href = '/login';
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
          <li>
            <NavLink
              to="/orderhistory"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}
            >
              Orders
            </NavLink>
          </li>

          {!!email && <h3>User: {userEmail}</h3>}
          <Button onClick={() => redirectToHome()}>Log In</Button>

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
