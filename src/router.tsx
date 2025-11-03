import { createBrowserRouter } from 'react-router';
import AppRoot from './components/layout/AppRoot.tsx/AppRoot';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import CompaniesPage from './pages/CompaniesPage/CompaniesPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import HomePage from './pages/HomePage/HomePage';
import MainRoot from './components/layout/MainRoot/MainRoot';
import TestPage from './pages/SignupPage/test';
import UserInfoPage from './pages/User-infoPage/User-infoPage';
/**
 * @link https://reactrouter.com/start/data/routing
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppRoot />,
    errorElement: <NotFoundPage />,
    children: [
      {
        element: <MainRoot />,
        children: [
          { index: true, element: <HomePage /> },
          { path: 'companies', element: <CompaniesPage /> },
          { path: 'user-info', element: <UserInfoPage /> },
        ],
      },
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignupPage /> },
      { path: 'test', element: <TestPage /> },
    ],
  },
]);

export default router;
