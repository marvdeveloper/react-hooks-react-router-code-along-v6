import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";  // Import the UserProfile component
import ErrorPage from "./pages/ErrorPage";  // Import the ErrorPage (optional)

// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />  // Optional, in case of errors
  },
  {
    path: "/profile/:id",  // Dynamic route for UserProfile
    element: <UserProfile />,
    errorElement: <ErrorPage />  // Optional, in case of errors
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router} />  // Use RouterProvider to pass your routes
);
