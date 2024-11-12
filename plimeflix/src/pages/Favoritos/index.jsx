import { useEffect, useState } from "react";

export default function Favoritos() {
  const [filmesFavoritos, setFilmesFavoritos] = useState([]);

  useEffect(() => {
    const filmesStorage = JSON.parse(localStorage.getItem("@filmesFavoritos"));

    if (filmesStorage) {
      setFilmesFavoritos(filmesFavoritos);
    }
  }, []);

  return (
    <>
      <h1
        className="
          font-bold text-center mb-8
          text-2xl md:text-3xl lg:text-4xl"
      >
        Meus Favoritos
      </h1>
      <section></section>
    </>
  );
}
