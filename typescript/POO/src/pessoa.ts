class Pessoa {
  // Atributos pertencente de cada Instância.
  nome: string;
  idade: number;
  endereco: string;

  // atributo pertencente a Class.
  static totalPessoas: number = 0;

  constructor(nome: string, idade: number, endereco: string) {
    // inicializando a instância com os atributos definidos.
    this.nome = nome;
    this.idade = idade;
    this.endereco = endereco;

    // incrementando o atributo da class a cada instância criada.
    Pessoa.inclementarPessoa();
  }

  saudacao() {
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }

  static inclementarPessoa() {
    Pessoa.totalPessoas++;
  }
}

const pessoa: Pessoa = new Pessoa("Gabriel", 19, "Belo Horizonte");
pessoa.saudacao();

console.log("Total de pessoas: " + Pessoa.totalPessoas);
