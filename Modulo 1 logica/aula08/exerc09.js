/*9 - Crie uma função chamada verificarNumero(n) que recebe um número inteiro e retorna: 
"Positivo", se o número for maior que zero. 
"Negativo", se for menor que zero. 
"Zero", se for exatamente zero.*/
function verifica(num){
    let msg;
    if (num > 0){
        msg = 'Número positivo';
    } else if (num < 0){
        msg = 'Número negativo';
    } else {
        msg = 'Você digitou 0'
    }
    return msg;
}
let numero = parseInt(prompt('Número'));
let txt = verifica(numero);
alert(txt);