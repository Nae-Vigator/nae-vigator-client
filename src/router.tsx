import { createBrowserRouter } from 'react-router';
import App from './App';
import AppRoot from './AppRoot';
import NotFound from './NotFound';

/**
 * @link https://reactrouter.com/start/data/routing
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppRoot />,
    errorElement: <NotFound />,
    children: [{ index: true, element: <App /> }],
  },
]);

export default router;
