/*5. Pedir nome e idade de 5 pessoas, mostrar quem é o mais velho 

Descrição: Solicite nome e idade de 5 pessoas e exiba o nome do mais velho.*/
let nome;
let idade;
let maisVelho = "";
let maiorIdade = 0;
for (let i = 0;i <5;i++){
    nome = prompt('Digite o nome da pessoa: ' + (i +1));
    idade = Number(prompt('Digite a idade da pessoa: ' + nome ));
    if (idade > maiorIdade){
        maiorIdade = idade;
        maisVelho = nome;
    }
}
document.write('A pessoa mais velha é: ' , maisVelho , 'com' , maiorIdade , 'anos');
