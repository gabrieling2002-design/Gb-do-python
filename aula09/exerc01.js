/*Enunciado:Crie um programa que sorteia um número entre 1 e 100.
 Se for par, exiba "Número X é par". Se for ímpar, exiba "Número X é ímpar*/
let num = Math.floor(Math.random() * 100) + 1;
if ((num % 2) == 0) {
    alert('Número sorteado é: ' + num + ' PAR');
} else {
    alert('Número sorteado é: ' + num + ' ÍMPAR');
}