import { ROUTES } from 'entities/routes';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

const ProtectedRoute = () => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to={ROUTES.LOGIN} />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
