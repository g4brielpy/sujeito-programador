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
}
const pessoa = new Pessoa("Gabriel", 19, "Belo Horizonte");
