function LogClasse(constructor: Function) {
  console.log(`Classe criada: ${constructor.name}`);
}

@LogClasse
class Pessoa3 {
  constructor(public nome: string) {}
}

const p = new Pessoa3("Carlos");
