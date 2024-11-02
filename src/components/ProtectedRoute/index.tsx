import { Navigate, Outlet } from 'react-router-dom';
import { FC } from 'react';
import { PATHS } from '@/constants';
interface IProps {
  redirectPath?: string;
  isAllowed: boolean;
  children: JSX.Element;
}

export const ProtectedRoute: FC<IProps> = ({ isAllowed, redirectPath = PATHS.SIGN_IN, children }) => {
  if (!isAllowed) {
    localStorage.clear();
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};
