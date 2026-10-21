import { useParams } from "react-router";
import { useFetchCoin } from "../../hooks/useFetchCoin";

export default function Detail() {
  const { id } = useParams();
  const { coin, loading, error } = useFetchCoin(id);

  return (
    <div>
      <h1>Detalhes</h1>
      {!id && <p>Identificador da moeda não informado.</p>}
      {loading && <p>Carregando...</p>}
      {error && <p role="alert">Erro ao carregar a moeda: {error}</p>}
      {coin && <p>{coin.name}</p>}
    </div>
  );
}
