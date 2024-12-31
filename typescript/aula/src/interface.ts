interface userProps {
  nome: string;
  email: string;
  idade?: number;
  apresentacao?: () => void;
}

const usuario: userProps = {
  nome: "Gabriel",
  email: "gabriel@gmail.com",
  apresentacao: function () {
    console.log(`Usuário: ${this.nome} - Email: ${this.email}`);
  },
};

usuario.apresentacao?.();
