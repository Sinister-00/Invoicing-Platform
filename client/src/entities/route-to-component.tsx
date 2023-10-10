import AboutPage from '../views/about';
import BillPage from '../views/bill';
import HomePage from '../views/home';
import LoginPage from '../views/login';
import OrderPage from '../views/order';
import OrderHistoryPage from '../views/order-history';
import ProductsPage from '../views/products';
import SignInPage from '../views/signin';
import { ROUTES } from './routes';

export const routeList: Record<string, React.ReactNode> = {
  [ROUTES.HOME]: <HomePage />,
  [ROUTES.ABOUT]: <AboutPage />,
  [ROUTES.PRODUCTS]: <ProductsPage />,
  [ROUTES.ORDER_PLACED]: <OrderPage />,
  [ROUTES.ORDER_HISTORY]: <OrderHistoryPage />,
  [ROUTES.LOGIN]: <LoginPage />,
  [ROUTES.SIGNIN]: <SignInPage />,
  [ROUTES.BILL]: <BillPage />,

};
