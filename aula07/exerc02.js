/*2. Receber 10 idades e informar quantas são maiores de idade*/
let i = 1;
let idade;
let somaqtdmaior = 0 ;
while (i<=10){
    idade = Number(prompt('Idade?'));
    if (idade >= 18) {
        somaqtdmaior++;
    }
    i++;
}
document.write('Qtd de maiores: '+somaqtdmaior);