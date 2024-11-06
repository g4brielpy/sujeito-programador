import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-black text-white">
      <div className="container py-4 flex justify-around">
        <Link to={"/"}>Plime Flix</Link>
        <Link to={"/favoritos"}>Meus Filmes</Link>
      </div>
    </header>
  );
}
