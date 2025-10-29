import { createBrowserRouter } from 'react-router';
import Home from './pages/Home/Home';
import AppRoot from './AppRoot';
import NotFound from './pages/NotFound/NotFound';
import Companies from './pages/Companies/Companies';

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
      { path: 'companies', element: <Companies /> },
    ],
  },
]);

export default router;
