import { useParams } from "react-router-dom";

export default function Filme() {
  const { id } = useParams();

  return (
    <div>
      <h1>Pagina Filmes {id}</h1>
    </div>
  );
}
