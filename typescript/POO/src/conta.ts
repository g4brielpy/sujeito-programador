type contaType = "CORRENTE" | "POUPANÇA";

abstract class Conta {
  protected _saldo: number;
  protected _credito: number = 500;

  constructor(saldo: number) {
    this._saldo = saldo;
  }

  get consultarCredito(): number {
    return this._credito;
  }

  set alterarSaldo(novoSaldo: number) {
    if (novoSaldo > 0) {
      this._saldo = novoSaldo;
    } else {
      console.log("Valor inválido: " + novoSaldo);
    }
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
minhaConta.alterarSaldo = -2;

console.log(minhaConta);
