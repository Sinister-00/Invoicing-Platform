import HomePage from '../views/home';
import { ROUTES } from './routes';

export const routeList: Record<string, React.ReactNode> = {
  [ROUTES.HOME]: <HomePage />,
};
