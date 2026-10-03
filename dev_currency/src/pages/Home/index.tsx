// import React from "react";

export default function Home() {
  return (
    <main>
      <form className="flex gap-x-8">
        <input
          type="text"
          name="name-cript"
          required
          placeholder="Digite o nome da Crypto"
          className="
            bg-primaryOpace text-white rounded-md px-4 h-12
            flex-1 outline-none border-none
            transition-shadow duration-300 ease-in-out
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600
          "
        />
        <button type="submit">
          <img src={"icoSearch"} alt="Buscar" className="text-white" />
        </button>
      </form>
    </main>
  );
}
