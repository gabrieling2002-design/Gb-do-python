//Crie uma função que recebe um array de números e retorna quantos deles são pares.
function contarPares(numeros){
    let pares = 0;
    for (let i = 0; i<numeros.length; i++){
        if(numeros[i] % 2 == 0){
            pares++;
        }
    }
    console.log('Quantidade de números pares: ', pares);
}
let lista = [1,2,3,4,5,6,7,8,9,10,11,12];
contarPares(lista);