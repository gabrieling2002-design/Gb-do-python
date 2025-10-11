/*10 - Crie uma função chamada contarImpares(n), 
que recebe um número inteiro positivo e retorna quantos números ímpares existem de 1 até N.*/

 

// ----------- para o lar
function contarImpar(n){
    qtdimpar = 0
    for (let i = 1; 1 <= n; i++){
        if ((i % 2) !=0){
            qtdimpar++;
        }
    }
    return qtdimpar;
}
let numero = parseInt(prompt('Número'));
let qtd = contarImpar(numero);
alert('A quantidade de ímpares é: '+ qtd);