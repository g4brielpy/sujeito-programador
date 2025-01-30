type contaType = "CORRENTE" | "POUPANÇA";

class Conta {
  tipo: contaType;
  saldo: number;
  private credito: number = 500;

  constructor(tipo: contaType, saldo: number) {
    this.tipo = tipo;
    this.saldo = saldo;
  }

  consultarCredito() {
    return this.credito;
  }
}

const minhaConta: Conta = new Conta("CORRENTE", 250);

console.log(minhaConta.consultarCredito());
