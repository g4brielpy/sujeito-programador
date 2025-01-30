"use strict";
class Conta {
    constructor(tipo, saldo) {
        this.credito = 500;
        this.tipo = tipo;
        this.saldo = saldo;
    }
    consultarCredito() {
        return this.credito;
    }
}
const minhaConta = new Conta("CORRENTE", 250);
console.log(minhaConta.consultarCredito());
