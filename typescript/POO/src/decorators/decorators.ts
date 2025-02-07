function LogClass(constructor: Function) {
  console.log(constructor.name);
}

@LogClass
class Pessoa2 {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
}

const pessoa2 = new Pessoa2("Gabriel", 19);
