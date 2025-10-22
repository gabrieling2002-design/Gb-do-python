//Crie uma função que recebe um array de nomes e retorna um novo array com os nomes em ordem reversfunction inverterNomes(nomes) {
/*function inverterNomes(nomes) {
    let nomesInvertidos = [];
    for (let i = nomes.length - 1; i >= 0; i--) {
        nomesInvertidos.push(nomes[i]);
    }
    return nomesInvertidos;
}
let nomes = ["Ana", "Bruno", "Carlos"];
let resultado = inverterNomes(nomes);
console.log(resultado); 
console.log(nomes);*/

//outra forma de se fazer
function inverterNomes(nomes){
    let novo = [];
    for(let i = nomes.length -1 ; i >=0; i--){
        novo.push(nomes[i]);
    }
    console.log(novo);
}
let lista = ['Klebber','Vinícius','Pedro']
inverterNomes(lista);