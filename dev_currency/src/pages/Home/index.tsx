// import { useEffect, useState } from "react";
import { InputSearch } from "../../components/InputSearch";
import { useFetchAssets } from "../../hooks/useFetchAssets";

export default function Home() {
  useFetchAssets();
  return (
    <main className="container mx-auto p-6">
      <form className="flex gap-x-8">
        <InputSearch />
        <button type="submit">
          <img src={"icoSearch"} alt="Buscar" className="text-white" />
        </button>
      </form>
      <section className="my-10">
        <table className="w-full">
          <thead>
            <tr className="text-cyan-500">
              <th scope="col">#</th>
              <th scope="col">Moeda</th>
              <th scope="col">Valor mercado</th>
              <th scope="col">Preço</th>
              <th scope="col">Volume</th>
              <th scope="col">Mudança 24h</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </section>
    </main>
  );
}
