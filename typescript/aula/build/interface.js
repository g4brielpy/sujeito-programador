"use strict";
var _a;
const usuario = {
    nome: "Gabriel",
    email: "gabriel@gmail.com",
    apresentacao: function () {
        console.log(`Usuário: ${this.nome} - Email: ${this.email}`);
    },
};
(_a = usuario.apresentacao) === null || _a === void 0 ? void 0 : _a.call(usuario);
