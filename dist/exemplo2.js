"use strict";
var buttonTeste = document.getElementById("button");
function somarImplicity(parametro1, parametro2) {
    return parametro1 + parametro2;
}
buttonTeste.addEventListener('click', function () {
    console.log('funcionou');
    console.log(somarImplicity(2, 8));
});
