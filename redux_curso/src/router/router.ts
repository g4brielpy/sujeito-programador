import { createBrowserRouter, redirect } from "react-router";

import Login from "../pages/Login";
import Painel from "../pages/Painel";

export const router = createBrowserRouter([
  {
    index: true,
    loader: () => redirect("/login"),
  },
  {
    path: "login",
    Component: Login,
  },
  {
    path: "painel",
    Component: Painel,
  },
]);
