// import { useEffect, useState } from "react";
import { InputSearch } from "../../components/InputSearch";
import { useFetchAssets } from "../../hooks/useFetchAssets";

export default function Home() {
  useFetchAssets();
  return (
    <main>
      <form className="flex gap-x-8">
        <InputSearch />
        <button type="submit">
          <img src={"icoSearch"} alt="Buscar" className="text-white" />
        </button>
      </form>
    </main>
  );
}
