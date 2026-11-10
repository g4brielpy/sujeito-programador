import { Link } from "react-router";

export default function Login() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-slate-950 px-4 py-12">
      <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-2xl shadow-black/20 sm:p-10">
        <div className="mb-8">
          <Link
            to={"/painel"}
            className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600"
          >
            Dev Login
          </Link>
        </div>

        <form action="#" className="space-y-5">
          <div>
            <label
              htmlFor="nome"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Nome
            </label>
            <input
              type="text"
              name="nome"
              id="nome"
              required
              placeholder="Digite seu nome"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="voce@exemplo.com"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/30"
          >
            Acessar
          </button>
        </form>
      </section>
    </main>
  );
}
