import axios from "axios";
import { useEffect, useState } from "react";
import { apiCoincap } from "../API/coincap";
import { type CoinsProps } from "../types/CoinsProps";

export function useFetchCoin(id: string | undefined) {
  const [coin, setCoin] = useState<CoinsProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchCoin() {
      setCoin(null);
      setError(null);

      if (!id) {
        setLoading(false);
        return;
      }

      setLoading(true);

      try {
        const response = await apiCoincap.get<{ data: CoinsProps }>(
          `assets/${id}`,
          { signal: controller.signal },
        );
        setCoin(response.data.data);
      } catch (requestError: unknown) {
        if (axios.isCancel(requestError)) return;

        setError(
          requestError instanceof Error
            ? requestError.message
            : "Não foi possível carregar os detalhes da moeda.",
        );
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    fetchCoin();

    return () => controller.abort();
  }, [id]);

  return { coin, loading, error };
}
