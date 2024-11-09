import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ButtonLink, ButtonA } from "../../components/IU/Button";
import { API } from "../../utils/api";

export default function Filme() {
  const { id } = useParams();

  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFilme() {
      try {
        const responde = await API.get(`movie/${id}`, {
          params: {
            api_key: "4982b0cc449d4b6188e7b49b8b9fb7f2",
            language: "pt-BR",
          },
        });
        setFilme(responde.data);
      } catch (e) {
        console.log("Error: " + e);
      } finally {
        setLoading(false);
      }
    }

    fetchFilme();
  }, []);

  return (
    <article className="container py-16 flex justify-center">
      <div className=" bg-black text-white w-full max-w-[600px] p-4 rounded-sm">
        <h1
          className="
          font-bold text-center
          text-2xl md:text-3xl lg:text-4xl"
        >
          {filme.title}
        </h1>
        <img
          className="object-cover m-auto my-10 rounded-md"
          src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}
          alt={filme.original_title}
        />
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 font-bold">
            Sinopse
          </h2>
          <p className="md:text-lg lg:text-xl text-justify">{filme.overview}</p>
        </div>
        <nav className="mt-12 flex justify-around flex-wrap">
          <ButtonLink href={"/"}>Voltar</ButtonLink>
          <ButtonA href={"https"}>Ver treile</ButtonA>
        </nav>
      </div>
    </article>
  );
}
