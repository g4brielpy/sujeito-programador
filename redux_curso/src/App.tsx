import { RouterProvider } from "react-router";
import { router } from "./router/router";
import "./app.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
