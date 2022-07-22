"use strict";
/* Como podemos melhorar o esse código usando TS?

let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};
let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}*/
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Atriz"] = 0] = "Atriz";
    Profissao[Profissao["Padeiro"] = 1] = "Padeiro";
})(Profissao || (Profissao = {}));
let pessoa1 = {
    nome: "carlos",
    idade: 43,
    profissao: Profissao.Padeiro
};
let pessoa2 = {
    nome: "joao",
    idade: 26,
    profissao: Profissao.Padeiro
};
let pessoa3 = {
    nome: "maria",
    idade: 18,
    profissao: Profissao.Atriz
};
let pessoa4 = {
    nome: "Ana",
    idade: 29,
    profissao: Profissao.Atriz
};
