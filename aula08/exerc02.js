/*2 - Crie uma função para cada uma das 4 operações aritméticas (soma, subtração, divisão e multiplicação). 
Depois crie um programa que leia dois números e de acordo com a operação solicitada, chame a função responsável pela operação.*/
function somar(a,b){
    return a + b;
}
function sub(a,b){
    return a - b;
}
function div(a,b){
    return a / b;
}
function mult(a,b){
    return a * b;
}
let num1 = parseInt(prompt('Número: 1'));
let num2 = parseInt(prompt('Número: 2'));
let soma = somar(num1 , num2);
alert('O resultado da soma é: '+soma);
let subtracao = sub(num1 , num2);
alert('O resultado da subtração é: '+subtracao);
let divisao = div(num1 , num2);
alert('O resultado da divisão é: '+divisao);
let multiplicacao =mult(num1 , num2);
alert('O resultado da multiplicação é: '+multiplicacao);