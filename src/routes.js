import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import ErrorPage from "./pages/ErrorPage";  // Optional error page

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />  // Optional error handling
  },
  {
    path: "/profile/:id",  // Dynamic route for UserProfile
    element: <UserProfile />,
    errorElement: <ErrorPage />  // Optional error handling
  },
];

export default routes;
