import React, { FC, lazy, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './components/layouts/Layout';
import { PATHS, TITLE_PATHS } from './constants';
import { clearAlertStore } from './features/app/appSlice';
import { RootState } from './store';
import { useAppDispatch, useAppSelector } from './store/hooks';
import LoadingPage from './components/LoadingPage';
import { ProtectedRoute } from './components';
import { getProfile } from './features/user/userActions';
import ResetPasswordPage from './pages/common/ResetPassword';

// Common pages
const NotFoundPage = React.lazy(() => import('./pages/common/NotFound'));
const SignInPage = lazy(() => import('./pages/common/SignIn'));
const SignUpPage = lazy(() => import('./pages/common/SignUp'));

// Admin pages
const AdminDashboardPage = React.lazy(() => import('./pages/admin/dashboard'));
const AdminBookPage = React.lazy(() => import('./pages/admin/books'));
const SettingPage = React.lazy(() => import('./pages/admin/settings'));
const MemberPage = React.lazy(() => import('./pages/admin/members'));

// User Pages
const UserDashboardPage = React.lazy(() => import('./pages/user/dashboard'));
const EventList = React.lazy(() => import('./pages/user/event'));
const UserProfile = React.lazy(() => import('./pages/user/profile'));

function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { message, type } = useAppSelector((state: RootState) => state.appStore);
  const { isAuthentication, user, isAdmin } = useAppSelector((state: RootState) => state.userStore);

  const [initState, setInitState] = useState(false);

  React.useEffect(() => {
    const getProfileUser = async () => {
      try {
        await Promise.all([dispatch(getProfile())]);
        if (location.pathname === PATHS.SIGN_IN || location.pathname === PATHS.SIGN_UP) {
          if(isAdmin) {
            window.location.href = PATHS.HOME;
          } else {
            window.location.href = PATHS.USER_HOME;
          }
        }
      } catch (error) {
        window.location.href = PATHS.SIGN_IN;
      } finally {
        setInitState(true)
      }
    };
    if (isAuthentication) {
      getProfileUser();
    } else {
      setInitState(true)
    }
  }, [isAuthentication, isAdmin]);

  React.useEffect(() => {
    if (message && type) {
      toast(message, {
        type: type,
        position: 'bottom-right',
        theme: 'light',
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        bodyClassName: 'toast-body',
      });
      setTimeout(() => dispatch(clearAlertStore()), 3000);
    }
  }, [dispatch, message, type]);
  React.useEffect(() => {
    if (message && type) {
      toast(message, {
        type: type,
        position: 'bottom-right',
        theme: 'light',
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        bodyClassName: 'toast-body',
      });
      setTimeout(() => dispatch(clearAlertStore()), 3000);
    }
  }, [dispatch, message, type]);

  React.useEffect(() => {
    document.title = TITLE_PATHS[location.pathname] ?? 'Not found';
  }, [location]);

  if (!initState) {
    return <LoadingPage />;
  }

  return (
    <React.Fragment>
      <React.Suspense fallback={<LoadingPage />}>
        <Routes>
          {/* admin paths */}
          <Route
            path={PATHS.HOME}
            element={
              <ProtectedRoute isAllowed={isAuthentication && user?.role == 'Admin'}>
                <Layout isAllowed={true} />
              </ProtectedRoute>
            }
          >
            <Route index element={<AdminDashboardPage />} />
            <Route path={PATHS.BOOKS} element={<AdminBookPage />} />
            <Route path={PATHS.SETTINGS} element={<SettingPage />} />
            <Route path={PATHS.MEMBERS} element={<MemberPage />} />
          </Route>

          {/* user paths */}
          <Route
            path={PATHS.USER_HOME}
            element={
              <ProtectedRoute isAllowed={isAuthentication && user?.role == 'User'}>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<UserDashboardPage />} />
            <Route path={PATHS.PROFILE} element={<UserProfile />} />
            <Route path={PATHS.EVENT} element={<EventList />} />
          </Route>

          <Route path={PATHS.SIGN_UP} element={<SignUpPage />} />
          <Route path={PATHS.SIGN_IN} element={<SignInPage />} />
          <Route path={PATHS.RESET_PASSWORD} element={<ResetPasswordPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </React.Suspense>
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
