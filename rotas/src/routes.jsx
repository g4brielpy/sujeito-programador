import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layout/Root";

import Home from "./pages/home";
import Filme from "./pages/Filme";

export default function RoutesConfig() {
  return (
    <div>
      <BrowserRouter>
        <RootLayout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/filme/:id" element={<Filme />}></Route>
          </Routes>
        </RootLayout>
      </BrowserRouter>
    </div>
  );
}
