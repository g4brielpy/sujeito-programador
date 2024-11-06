import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-black text-white">
      <div
        className="
        container py-4 flex justify-around 
        md:text-xl lg:text-2xl"
      >
        <Link to={"/"} className="font-bold">
          Plime Flix
        </Link>
        <Link to={"/favoritos"}>Meus Filmes</Link>
      </div>
    </header>
  );
}
