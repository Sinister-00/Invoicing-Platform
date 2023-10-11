import { ROUTES } from 'entities/routes';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

const AuthRoute = () => {
  const { token } = useAuth();

  if (token) {
    return <Navigate to={ROUTES.HOME} />;
  }
  return <Outlet />;
};

export default AuthRoute;
