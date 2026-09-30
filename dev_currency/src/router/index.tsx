import { createBrowserRouter } from "react-router";

import LayoutRoot from "../layout";

import Home from "../pages/Home";
import Detail from "../pages/Detail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LayoutRoot,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "detail/:id",
        Component: Detail,
      },
    ],
  },
]);
