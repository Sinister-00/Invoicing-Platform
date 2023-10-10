import AboutPage from '../views/about';
import HomePage from '../views/home';
import OrderPage from '../views/order';
import OrderHistoryPage from '../views/order-history';
import ProductsPage from '../views/products';
import { ROUTES } from './routes';

export const routeList: Record<string, React.ReactNode> = {
  [ROUTES.HOME]: <HomePage />,
  [ROUTES.ABOUT]: <AboutPage />,
  [ROUTES.PRODUCTS]: <ProductsPage />,
  [ROUTES.ORDER_PLACED]: <OrderPage />,
  [ROUTES.ORDER_HISTORY]: <OrderHistoryPage />,
};
