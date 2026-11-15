import { useState } from "react";
import { Link } from "react-router";

import { useSelector, useDispatch } from "react-redux";
import { type storeState } from "../../context/store";
import { setEndereco } from "../../context/user/slice";

export default function Endereco() {
  const dispatch = useDispatch();
  const { endereco } = useSelector((state: storeState) => state.user["user"]);

  const [enderecoInput, setEnderecoInput] = useState(endereco);

  function handleSubmitEndereco(
    event: React.SubmitEvent<HTMLFormElement>,
  ): void {
    event.preventDefault();

    dispatch(setEndereco(enderecoInput));
  }

  return (
    <main className="min-h-dvh bg-slate-950 px-4 py-12">
      <div className="mx-auto w-full max-w-4xl">
        <nav
          aria-label="Navegação principal"
          className="mb-6 flex flex-wrap gap-2 rounded-2xl border border-slate-800 bg-slate-900 p-2"
        >
          <Link
            to={"/login"}
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-indigo-500/30"
          >
            Login
          </Link>
          <Link
            to={"/painel"}
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-indigo-500/30"
          >
            Painel
          </Link>
          <Link
            to={"/endereco"}
            aria-current="page"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/30"
          >
            Meus endereços
          </Link>
        </nav>

        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-2xl shadow-black/20 sm:p-10">
          <header className="mb-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Área do usuário
            </p>
            <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Meu endereço
            </h1>
            <p className="mt-2 text-slate-600">
              Informe seu endereço para manter seus dados atualizados.
            </p>
          </header>

          <form
            className="space-y-5"
            onSubmit={(event) => handleSubmitEndereco(event)}
          >
            <div>
              <label
                htmlFor="endereco"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Endereço
              </label>
              <input
                type="text"
                value={enderecoInput}
                onChange={(event) => setEnderecoInput(event.target.value)}
                name="endereco"
                id="endereco"
                placeholder="Digite seu endereço"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 sm:w-auto"
            >
              Salvar
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
