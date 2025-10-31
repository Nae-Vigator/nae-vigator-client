import { createBrowserRouter } from 'react-router';
import AppRoot from './AppRoot';
import NotFound from './pages/NotFound/NotFound';
import Companies from './pages/Companies/Companies';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home/Home';

/**
 * @link https://reactrouter.com/start/data/routing
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppRoot />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
      { path: 'companies', element: <Companies /> },
    ],
  },
]);

export default router;
