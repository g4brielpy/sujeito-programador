import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <header className="h-30 flex items-center justify-center p-4">
      <img src={logo} alt="Logo CriptAPP" />
    </header>
  );
}
