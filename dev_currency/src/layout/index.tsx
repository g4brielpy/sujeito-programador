import { Outlet } from "react-router";
import { Header } from "../components/Header";

export default function LayoutRoot() {
  return (
    <div className="bg-primary min-h-dvh flex flex-col">
      <Header />
      <main className="flex-1 px-6 py-4">
        <Outlet />
      </main>
    </div>
  );
}
