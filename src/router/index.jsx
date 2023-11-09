import { createBrowserRouter } from 'react-router-dom';
import { HomeLayout } from '../layout';
import { Dashboard } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [{ index: true, element: <Dashboard /> }],
  },
]);

export default router;
