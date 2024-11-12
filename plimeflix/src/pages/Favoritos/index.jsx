import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Favoritos() {
  const [filmesFavoritos, setFilmesFavoritos] = useState([]);

  useEffect(() => {
    const filmesStorage = JSON.parse(localStorage.getItem("@filmesFavoritos"));

    if (filmesStorage) {
      setFilmesFavoritos(filmesFavoritos);
    }
  }, []);

  return (
    <main className="container py-12">
      <h1
        className="
          font-bold text-center mb-8
          text-2xl md:text-3xl lg:text-4xl"
      >
        Meus Favoritos
      </h1>
      <section>
        {filmesFavoritos && (
          <div className="text-center flex justify-center items-center h-[80vh]">
            <div className="">
              <h2 className="text-3xl mb-8">Você não tem filmes favoritos</h2>
              <Link to={"/"} className="underline text-xl">
                Ver todos os filmes
              </Link>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
