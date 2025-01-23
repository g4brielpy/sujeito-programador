"use strict";
class Pessoa {
    constructor(nome, idade, endereco) {
        // inicializando a instância com os atributos definidos.
        this.nome = nome;
        this.idade = idade;
        this.endereco = endereco;
        // incrementando o atributo da class a cada instância criada.
        Pessoa.inclementarPessoa();
    }
    saudacao() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
    static inclementarPessoa() {
        Pessoa.totalPessoas++;
    }
}
// atributo pertencente a Class.
Pessoa.totalPessoas = 0;
const pessoa = new Pessoa("Gabriel", 19, "Belo Horizonte");
pessoa.saudacao();
console.log("Total de pessoas: " + Pessoa.totalPessoas);
