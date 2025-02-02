"use strict";
class Conta {
    constructor(saldo) {
        this._credito = 500;
        this.saldo = saldo;
    }
    get consultarCredito() {
        return this._credito;
    }
}
class ContaCorrente extends Conta {
    constructor(saldo) {
        super(saldo);
        this.tipo = "CORRENTE";
        this._credito = 1000;
    }
}
const minhaConta = new ContaCorrente(2500);
console.log(minhaConta);
// const minhaConta: Conta = new Conta("CORRENTE", 250);
