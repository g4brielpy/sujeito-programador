function ValidarNome(target: any, key: string) {
  let valor = target[key];

  const getter = () => {
    console.log("Valor da propriedade " + key + ": ");
    return valor;
  };

  const setter = (novoValor: string) => {
    if (novoValor !== "") {
      valor = novoValor;
    } else {
      console.log("Valor inválido!");
    }
  };

  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
  });
}

class Jogo {
  @ValidarNome
  nome: string;
  lancamento: string;

  constructor(nome: string, lancamento: string) {
    this.nome = nome;
    this.lancamento = lancamento;
  }
}

const l4d = new Jogo("Left 4 Dead 2", "2009");
console.log(l4d.nome);
