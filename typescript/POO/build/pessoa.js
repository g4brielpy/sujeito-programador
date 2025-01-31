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
    static inclementarPessoa() {
        Pessoa.totalPessoas++;
    }
    saudacao() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
    // Métodos GET
    get getNome() {
        return this.nome;
    }
    get getIdade() {
        return this.idade;
    }
    // Métodos SET
    setNome(nomeNovo) {
        this.nome = nomeNovo;
    }
    setIdade(idadeNova) {
        this.idade = idadeNova;
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
    getSalario() {
        console.log(`R$ ${this.salario}`);
    }
}
// instânciando cada class
const pessoa = new Pessoa("Gabriel", 19, "Belo Horizonte");
pessoa.saudacao();
pessoa.setNome("Gabriel Iuri");
console.log(pessoa.getNome);
const funcionario = new Funcionario("Iuri", 19, "Belo Horizonte", "Dev", 2500);
funcionario.saudacao();
funcionario.getSalario();
console.log("Total de pessoas: " + Pessoa.totalPessoas);
