const pessoa = {
    nome: "Maria",
    idade: 28,
    profissao: 'desenvolvedora'
}

pessoa.idade = 25;

const diego: {
    nome: string,
    idade: number,
    profissao: string
} = {
    nome: "Diego",
    idade:37,
    profissao: 'desenvolvedor'
}

const xiao: {
    nome: string,
    idade: number,
    profissao: string
} = {
    nome: "Xiao Chan",
    idade:38,
    profissao: 'desenvolvedor'
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    Economista,
    JogadoraDeFutebol
}

interface Pessoa{
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa{
    materiais: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}
const julius: Pessoa = {
    nome: 'Julius Crews',
    idade: 40,
    profissao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materiais: ['Matematica discreta', 'programação']
}
const monica: Estudante = {
    nome: 'Monica',
    idade: 24,    
    materiais: ['Matematica discreta', 'programação']
}


function listar(lista: string[]){    
    for (const item in lista) {
        console.log(lista[item]);
    }
}

listar(monica.materiais)