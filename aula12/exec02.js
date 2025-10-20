//Peça ao usuário para inserir 4 números. Armazene em um array e exiba a média.
let numeros = [];
let soma = 0;
for (let i = 0; i<4; i++){
    let n = Number(prompt('Digite um número'));
    numeros.push(n);
    soma = soma + n;
}
let media = soma/numeros.length;
console.log('A média é: ' + media);
console.log('O conteudo do array: ' + numeros);