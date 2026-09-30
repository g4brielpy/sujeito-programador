import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import Detail from "../pages/Detail";

export const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    Component: Home,
  },
  {
    path: "detail/:id",
    Component: Detail,
  },
]);
