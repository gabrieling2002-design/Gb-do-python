/*Crie um array com nomes de 6 países. Peça ao usuário um número de
 1 a 6 e exiba o país correspondente. Se for inválido, mostre mensagem.*/
 let paises = ['Brasil','Portugal','Angola','Argentina','Paraguai','Urugai'] 
let num = Number(prompt('Informe um número de 1 a 6'));
if (num>=1 && num<=6){
    console.log('País escolhido: '+ paises[num-1]);
} else {
    console.log('Erro: Número inválido ');
}