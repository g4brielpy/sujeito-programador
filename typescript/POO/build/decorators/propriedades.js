"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function ValidarNome(target, key) {
    let valor = target[key];
    const getter = () => {
        console.log("Valor da propriedade " + key + ": ");
        return valor;
    };
    const setter = (novoValor) => {
        if (novoValor !== "") {
            valor = novoValor;
        }
        else {
            console.log("Valor inválido!");
        }
    };
    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
    });
}
class Jogo {
    constructor(nome, lancamento) {
        this.nome = nome;
        this.lancamento = lancamento;
    }
}
__decorate([
    ValidarNome
], Jogo.prototype, "nome", void 0);
const l4d = new Jogo("Left 4 Dead 2", "2009");
console.log(l4d.nome);
