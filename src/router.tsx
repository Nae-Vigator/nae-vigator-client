import { createBrowserRouter } from 'react-router';
import AppRoot from './AppRoot';
import NotFound from './pages/NotFound/NotFound';
import Companies from './pages/Companies/Companies';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home/Home';
import MainRoot from './components/layout/MainRoot/MainRoot';

/**
 * @link https://reactrouter.com/start/data/routing
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppRoot />,
    errorElement: <NotFound />,
    children: [
      {
        element: <MainRoot />,
        children: [
          { index: true, element: <Home /> },
          { path: 'companies', element: <Companies /> },
        ],
      },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
    ],
  },
]);

export default router;
