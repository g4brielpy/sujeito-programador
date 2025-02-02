type contaType = "CORRENTE" | "POUPANÇA";

abstract class Conta {
  saldo: number;
  protected _credito: number = 500;

  constructor(saldo: number) {
    this.saldo = saldo;
  }

  get consultarCredito(): number {
    return this._credito;
  }
}

class ContaCorrente extends Conta {
  tipo: contaType;

  constructor(saldo: number) {
    super(saldo);
    this.tipo = "CORRENTE";
    this._credito = 1_000;
  }
}

const minhaConta: ContaCorrente = new ContaCorrente(2_500);

console.log(minhaConta);

// const minhaConta: Conta = new Conta("CORRENTE", 250);
