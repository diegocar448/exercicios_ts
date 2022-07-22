let buttonTeste = document.getElementById("button");

function somarImplicity(parametro1:number, parametro2:number){
    
    return parametro1+parametro2;
}


buttonTeste.addEventListener('click', () =>{
    console.log('funcionou');
    console.log(somarImplicity(2,8))
})