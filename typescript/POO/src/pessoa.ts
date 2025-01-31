class Pessoa {
  // Atributos pertencente de cada Instância.
  public nome: string;
  protected idade: number;
  protected endereco: string;

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

  saudacao(): void {
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }

  static inclementarPessoa() {
    Pessoa.totalPessoas++;
  }
}

// Aplicando herança da class Pessoa
class Funcionario extends Pessoa {
  protected cargo: string;
  private salario: number;

  constructor(
    nome: string,
    idade: number,
    enderenco: string,
    cargo: string,
    salario: number
  ) {
    super(nome, idade, enderenco);

    this.cargo = cargo;
    this.salario = salario;
  }

  getSalario(): void {
    console.log(`R$ ${this.salario}`);
  }
}

// instânciando cada class
const pessoa: Pessoa = new Pessoa("Gabriel", 19, "Belo Horizonte");
pessoa.saudacao();

const funcionario: Funcionario = new Funcionario(
  "Iuri",
  19,
  "Belo Horizonte",
  "Dev",
  2_500
);
funcionario.saudacao();
funcionario.getSalario();

console.log("Total de pessoas: " + Pessoa.totalPessoas);
