import { useState, useEffect } from "react";
import { API } from "../../utils/api";

export default function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      try {
        const response = await API.get("movie/now_playing", {
          params: {
            api_key: "4982b0cc449d4b6188e7b49b8b9fb7f2",
            language: "pt-BR",
          },
        });

        setFilmes(response.data.results);
      } catch (e) {
        console.log("Erro:" + e);
      }
    }

    fetchAPI();
  }, []);

  return (
    <div>
      <h1>Pagina Home</h1>
    </div>
  );
}
