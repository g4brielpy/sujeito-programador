import { useEffect, useState, useRef } from "react";
import { apiCoincap } from "../API/coincap";

import { type AxiosResponse } from "axios";
import { type CoinsProps } from "../types/CoinsProps";

export function useFetchAssets() {
  const [dataCoins, setDataCoins] = useState<CoinsProps[]>([]);

  const limitCoins = useRef<number>(10);
  const offSetCoins = useRef<number>(0);

  useEffect(() => {
    (async () => {
      try {
        const response: AxiosResponse<{ data: CoinsProps[] }> =
          await apiCoincap.get("/assets", {
            params: {
              limit: limitCoins.current,
              offset: offSetCoins.current,
            },
          });

        setDataCoins(response.data.data);
      } catch {
        throw Error("Erro na API");
      }
    })();
  }, []);

  console.log(dataCoins);
}
