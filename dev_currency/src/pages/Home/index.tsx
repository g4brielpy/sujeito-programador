// import React from "react";
import { InputSearch } from "../../components/InputSearch";

export default function Home() {
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
