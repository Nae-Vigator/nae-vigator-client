import { createBrowserRouter } from 'react-router';
import App from './App';
import AppRoot from './AppRoot';
import NotFound from './NotFound';
import Login from './pages/Login';
import Signup from './pages/Signup';
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
