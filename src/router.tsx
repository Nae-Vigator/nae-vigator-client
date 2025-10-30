import { createBrowserRouter } from 'react-router';
import AppRoot from './AppRoot';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login';
import Signup from './pages/Signup';
import App from './App';
/**
 * @link https://reactrouter.com/start/data/routing
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppRoot />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Login /> },
      { path: 'signup', element: <Signup /> },
      { path: 'app', element: <App /> },
    ],
  },
]);

export default router;
