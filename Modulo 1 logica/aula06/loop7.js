/*4) Solicite ao usuário 5 números usando
 prompt e exiba a soma total, usando um loop*/
let numero , soma = 0;
for (let i=0; i<5; i++){
    numero = parseInt(prompt('Digite um valor'));
    //soma = soma + numero;
    soma += numero;
}
console.log('Total da soma é: ', soma)
console.log('=-=-=-=-=-Usando while=-=-=-=-=-=-=-');
let num, sum = 0, cont = 0;
while (cont<5){
    num = parseInt(prompt('Digite um valor'));
    sum += num;
    cont++;
}
console.log('Total da soma é: ', sum);