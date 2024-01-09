import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import FriendPage from '../pages/FriendPage';

// S1
// createBrowserRouter : วาง Route ต่างๆให้ App รับ input เป็น array ของ Router Object
// router object = {path:string, element:ReactElement | React Component}
const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/friend',
    element: <FriendPage />,
  },
  {
    // :dynamic Path Parameter
    path: '/friend/:friendId',
    element: <h1>FriendPage with ID</h1>,
  },
  {
    path: '*',
    element: <h1>Page Not Found</h1>,
  },
]);

// S2 : Set up Provider
export default function Router() {
  return <RouterProvider router={router} />;
}
