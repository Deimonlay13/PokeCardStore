// router/app.router.tsx
import { createBrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Cards } from "../cards/Cards";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/cartas", element: <Cards /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
