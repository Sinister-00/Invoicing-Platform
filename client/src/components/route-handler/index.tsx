import AuthRoute from 'components/auth-route';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import { ROUTES } from '../../entities/routes';
import AboutPage from '../../views/about';
import BillPage from '../../views/bill';
import CartPage from '../../views/cart';
import ContactPage from '../../views/contact';
import HomePage from '../../views/home';
import LoginPage from '../../views/login';
import OrderPage from '../../views/order';
// import OrderHistoryPage from '../../views/order-history';
import ProductsPage from '../../views/products';
import SignUpPage from '../../views/signup';
import ProductPage from '../../views/single-product';
import ProtectedRoute from '../protected-route';

const Routes = () => {
  const { token } = useAuth();

  const routesForPublic = [
    {
      path: ROUTES.HOME,
      element: <HomePage />,
    },
    {
      path: ROUTES.ABOUT,
      element: <AboutPage />,
    },
    {
      path: ROUTES.PRODUCTS,
      element: <ProductsPage />,
    },
    {
      path: ROUTES.CONTACT,
      element: <ContactPage />,
    },
    {
      path: ROUTES.PRODUCT,
      element: <ProductPage />,
    },
  ];

  const routesForAuthenticatedOnly = [
    {
      path: '/',
      element: <ProtectedRoute />,
      children: [
        {
          path: ROUTES.ORDER_PLACED,
          element: <OrderPage />,
        },
        // {
        //   path: ROUTES.ORDER_HISTORY,
        //   element: <OrderHistoryPage />,
        // },
        {
          path: ROUTES.BILL,
          element: <BillPage />,
        },
        {
          path: ROUTES.CART,
          element: <CartPage />,
        },
      ],
    },
  ];

  const routesForNotAuthenticatedOnly = [
    {
      path: '/',
      element: <AuthRoute />,
      children: [
        {
          path: ROUTES.LOGIN,
          element: <LoginPage />,
        },
        {
          path: ROUTES.SIGNUP,
          element: <SignUpPage />,
        },
      ],
    },
  ];

  const router = createBrowserRouter([
    ...routesForPublic,
    ...routesForNotAuthenticatedOnly,
    ...routesForAuthenticatedOnly,
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
