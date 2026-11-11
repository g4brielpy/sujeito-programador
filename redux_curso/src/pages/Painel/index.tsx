import { Link } from "react-router";

import { useSelector } from "react-redux";
import { type storeState } from "../../context/store";

export default function Painel() {
  interface userProps {
    name: string;
    email: string;
    endereco: string;
  }

  const user = useSelector<storeState, userProps>(
    (stateRoot) => stateRoot.user.user,
  );

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
            aria-current="page"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/30"
          >
            Painel
          </Link>
          <Link
            to={"/endereco"}
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-indigo-500/30"
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
              Olá {user ? user.name : ""}, bem-vindo!
            </h1>
            <p className="mt-2 text-slate-600">
              Confira suas informações cadastradas.
            </p>
          </header>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-sm font-medium text-slate-500">E-mail</h2>
              <p className="mt-2 wrap-break font-semibold text-slate-900">
                {user.email}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-sm font-medium text-slate-500">Endereço</h2>
              <p className="mt-2 wrap-break font-semibold text-slate-900">
                {user.endereco}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
