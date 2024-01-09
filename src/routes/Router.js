import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// S1
// createBrowserRouter : วาง Route ต่างๆให้ App รับ input เป็น array ของ Router Object
// router object = {path:string, element:ReactElement | React Component}
const router = createBrowserRouter([
  {
    path: '/login',
    element: <h1>LoginPage</h1>,
  },
  {
    path: '/',
    element: <h1>HomePage</h1>,
  },
  {
    path: '/profile',
    element: <h1>profilePage</h1>,
  },
  {
    path: '/friend',
    element: <h1>FriendPage</h1>,
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
