"use strict";
var valorAny;
valorAny = 1;
valorAny = "ola";
valorAny = true;
var valorString = 'teste';
valorString = valorAny;
var valorString2 = "testao";
valorString2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString('ola ' + valorString, valorString2);
