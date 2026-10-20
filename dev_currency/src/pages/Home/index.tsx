// import { useEffect, useState } from "react";
import { Link } from "react-router";
import { InputSearch } from "../../components/InputSearch";
import { Tr } from "../../components/Tr";
import { useFetchAssets } from "../../hooks/useFetchAssets";

import { type CoinsProps } from "../../types/CoinsProps";

import { formatCurrency } from "../../utils/formatCurrency";

export default function Home() {
  const { dataCoins, setOffSetCoins } = useFetchAssets();

  return (
    <main className="container mx-auto p-6">
      <form className="flex gap-x-8">
        <InputSearch />
        <button type="submit">
          <img src={"icoSearch"} alt="Buscar" className="text-white" />
        </button>
      </form>
      <section className="my-8 overflow-auto">
        <table className="text-white text-center px-4 w-full min-w-175 table-fixed border-separate border-spacing-y-4">
          <thead>
            <tr className="text-cyan-500">
              <th scope="col" className="w-14">
                #
              </th>
              <th scope="col">Moeda</th>
              <th scope="col">Valor mercado</th>
              <th scope="col">Preço</th>
              <th scope="col">Volume</th>
              <th scope="col">Mudança 24h</th>
            </tr>
          </thead>
          <tbody>
            {dataCoins.map((coin: CoinsProps) => (
              <Tr key={coin.id}>
                <td className="w-14 text-center">{coin.rank}</td>
                <td>
                  <div className="flex justify-center items-center">
                    <Link to={`detail/${coin.id}`}>
                      <div className="w-40 flex items-center gap-4">
                        <div className="w-7 h-7 shrink-0 bg-white rounded-full">
                          {/* Logo da criptomoeda */}
                        </div>
                        <span>
                          {coin.name} | {coin.symbol}
                        </span>
                      </div>
                    </Link>
                  </div>
                </td>
                <td>{formatCurrency(coin.marketCapUsd)}</td>
                <td>{formatCurrency(coin.priceUsd, "standard")}</td>
                <td>{formatCurrency(coin.volumeUsd24Hr, "compact", 0)}</td>
                <td
                  className={
                    Number(coin.changePercent24Hr) > 0
                      ? "text-profit"
                      : "text-loss"
                  }
                >
                  {Number(coin.changePercent24Hr).toFixed(2)}
                </td>
              </Tr>
            ))}
          </tbody>
        </table>
      </section>
      <button
        type="button"
        onClick={() => setOffSetCoins((prev) => prev + 10)}
        className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-primary transition-colors hover:bg-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
      >
        Ver Mais
      </button>
    </main>
  );
}
