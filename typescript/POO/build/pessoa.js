"use strict";
class Pessoa {
    constructor(nome, idade, endereco) {
        // inicializando a instância com os atributos definidos.
        this.nome = nome;
        this.idade = idade;
        this.endereco = endereco;
        // incrementando o atributo da class a cada instância criada.
        Pessoa.totalPessoas++;
    }
    saudacao() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}
const pessoa = new Pessoa("Gabriel", 19, "Belo Horizonte");
pessoa.saudacao();
