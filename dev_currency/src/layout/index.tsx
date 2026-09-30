import { Outlet } from "react-router";
import { Header } from "../components/Header";

export default function LayoutRoot() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
