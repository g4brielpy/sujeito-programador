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
// Aplicando herança da class Pessoa
class Funcionario extends Pessoa {
    constructor(nome, idade, enderenco, cargo, salario) {
        super(nome, idade, enderenco);
        this.cargo = cargo;
        this.salario = salario;
    }
}
// instânciando cada class
const pessoa = new Pessoa("Gabriel", 19, "Belo Horizonte");
pessoa.saudacao();
const funcionario = new Funcionario("Iuri", 19, "Belo Horizonte", "Dev", 2500);
funcionario.saudacao();
console.log("Total de pessoas: " + Pessoa.totalPessoas);
