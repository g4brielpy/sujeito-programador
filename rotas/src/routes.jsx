import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Filme from "./pages/Filme";

export default function RoutesConfig() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/filme/:id" element={<Filme />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
