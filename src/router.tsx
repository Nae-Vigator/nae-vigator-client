import { createBrowserRouter } from 'react-router';
import AppRoot from './components/layout/AppRoot.tsx/AppRoot';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import CompaniesPage from './pages/CompaniesPage/CompaniesPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import HomePage from './pages/HomePage/HomePage';
import MainRoot from './components/layout/MainRoot/MainRoot';
import CompaniesLayout from './components/layout/CompaniesLayout/CompaniesLayout';
import ExperiencePage from './pages/CompaniesPage/ExperiencePage/ExperiencePage';
import UserInfoPage from './pages/User-infoPage/User-infoPage';
import CoverLetterPage from './pages/CompaniesPage/CoverLetterPage/CoverLetterPage';
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
          {
            path: 'companies',
            children: [
              { index: true, element: <CompaniesPage /> },
              {
                path: ':company',
                element: <CompaniesLayout />,
                children: [
                  {
                    path: 'experience',
                    element: <ExperiencePage />,
                  },
                  {
                    path: 'coverletter',
                    element: <CoverLetterPage />,
                  },
                ],
              },
            ],
          },
          { path: 'user-info', element: <UserInfoPage /> },
        ],
      },
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignupPage /> },
    ],
  },
]);

export default router;
