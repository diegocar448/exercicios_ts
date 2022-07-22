"use strict";
var pessoa = {
    nome: "Maria",
    idade: 28,
    profissao: 'desenvolvedora'
};
pessoa.idade = 25;
var diego = {
    nome: "Diego",
    idade: 37,
    profissao: 'desenvolvedor'
};
var xiao = {
    nome: "Xiao Chan",
    idade: 38,
    profissao: 'desenvolvedor'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["Economista"] = 3] = "Economista";
    Profissao[Profissao["JogadoraDeFutebol"] = 4] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
var vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
var julius = {
    nome: 'Julius Crews',
    idade: 40,
    profissao: Profissao.Desenvolvedora
};
var jessica = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materiais: ['Matematica discreta', 'programação']
};
var monica = {
    nome: 'Monica',
    idade: 24,
    materiais: ['Matematica discreta', 'programação']
};
function listar(lista) {
    for (var item in lista) {
        console.log(lista[item]);
    }
}
listar(monica.materiais);
