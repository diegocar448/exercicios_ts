"use strict";
var anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = "teste";
anyEstaDeVolta = 5;
var stringTest = 'verificar';
stringTest = anyEstaDeVolta;
var unknownValor;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';
var stringTest2 = 'agora vai';
//stringTest2 = unknownValor;
//com uknown é precisa verificar o tipo antes de atribuir o valor, ja o any não precisa
if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}
//tipo erro throw
function jogaErro(erro, codigo) {
    throw {
        error: erro,
        code: codigo
    };
}
jogaErro('deu erro', 500);
