"use strict";
class Conta {
    constructor(saldo) {
        this._credito = 500;
        this._saldo = saldo;
    }
    get consultarCredito() {
        return this._credito;
    }
    set alterarSaldo(novoSaldo) {
        if (novoSaldo > 0) {
            this._saldo = novoSaldo;
        }
        else {
            console.log("Valor inválido: " + novoSaldo);
        }
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
minhaConta.alterarSaldo = -2;
console.log(minhaConta);
