// Declaração de string
const texto: string = "Lorem";

// Declaração de number
const numero: number = 20;

// Declaração de Array
const lista: string[] = ["Item 1", "Item 2", "Item 3"];

// Declaração de Objetos
const user: { nome: string; idade: number } = {
  nome: "Gabriel",
  idade: 19,
};

enum Themes {
  dark = "#000",
  claro = "#fff",
}
enum Status {
  ADMIN, // valor = 0
  USER, // valor = 1
  SUPPORT, // valor = 2
}

// Funcões
function saudacoes(nome: string): void {
  const mensagem: string = "Olá " + nome;
  console.log(mensagem);
}
saudacoes("Gabriel");

// Arrow function
