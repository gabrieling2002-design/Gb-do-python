//4 - Crie uma Função que Calcula o Quadrado de um Número
function Fimdafuncao(){
    alert('Fim do calculo');
}
function mensagemBoasVindas() {
    alert('Bem-vindo a soma ao calculo do quadrado');
}
function quadrado (a, b){
    return a ** b;
}
mensagemBoasVindas();
let num1 = parseInt(prompt('Qual o primeiro número?'));
let num2 = parseInt(prompt('Qual o segundo número'));
let resultado = quadrado(num1,num2);
alert(resultado);
Fimdafuncao();