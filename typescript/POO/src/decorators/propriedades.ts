class Jogo {
  nome: string;
  lancamento: string;

  constructor(nome: string, lancamento: string) {
    this.nome = nome;
    this.lancamento = lancamento;
  }
}

const l4d = new Jogo("Left 4 Dead 2", "2009");
