import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import TwoFactorAuthentication from "./pages/TwoFactorAuthentication";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/account/login",
      element: <Login />,
    },
    {
      path: "/account/logout",
      element: <Logout />,
    },
    {
      path: "/account/two-factor-authentication",
      element: <TwoFactorAuthentication />
    }

  ]);

  return <RouterProvider router={router} />;
}
