// router/app.router.tsx
import { createBrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { PokeContainer } from "../cartas/components/PokeContainer";
import Bienvenida from "../bienvenida/components/Bienvenida";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/cartas", element: <PokeContainer /> },
      { path: "/", element: <Bienvenida/>},
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
