import React from "react";
import ReactDOM from "react-dom/client";
import App from "C:/Users/azäk/Desktop/archives-project/retro-archives/src/components/App.jsx";
import "C:/Users/azäk/Desktop/archives-project/retro-archives/src/components/index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RuleOfRose from "../pages/RuleOfRose.jsx";
import About from "../pages/About.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/ruleofrose",
        element: <RuleOfRose />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
