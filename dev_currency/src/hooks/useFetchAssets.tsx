import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { apiCoincap } from "../API/coincap";

import { type AxiosResponse } from "axios";
import { type CoinsProps } from "../types/CoinsProps";

export function useFetchAssets() {
  const [dataCoins, setDataCoins] = useState<CoinsProps[]>([]);
  const [offSetCoins, setOffSetCoins] = useState<number>(0);

  const limitCoins = useRef<number>(10);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchAssets() {
      try {
        const response: AxiosResponse<{ data: CoinsProps[] }> =
          await apiCoincap.get("/assets", {
            params: {
              limit: limitCoins.current,
              offset: offSetCoins,
            },
            signal: controller.signal,
          });

        setDataCoins((prevCoins) => [...prevCoins, ...response.data.data]);
      } catch (error) {
        if (axios.isCancel(error)) return;
        throw error;
      }
    }

    fetchAssets();

    return () => controller.abort();
  }, [offSetCoins]);

  return { dataCoins, setOffSetCoins };
}
