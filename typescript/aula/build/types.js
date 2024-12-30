"use strict";
const texto = "Lorem";
const numero = 20;
const lista = ["Item 1", "Item 2", "Item 3"];
const user = {
    nome: "Gabriel",
    idade: 19,
};
var Themes;
(function (Themes) {
    Themes["dark"] = "#000";
    Themes["claro"] = "#fff";
})(Themes || (Themes = {}));
var Status;
(function (Status) {
    Status[Status["ADMIN"] = 0] = "ADMIN";
    Status[Status["USER"] = 1] = "USER";
    Status[Status["SUPPORT"] = 2] = "SUPPORT";
})(Status || (Status = {}));
function saudacoes(nome) {
    const mensagem = "Olá " + nome;
    console.log(mensagem);
}
saudacoes("Gabriel");
