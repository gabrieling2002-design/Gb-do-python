/*ler dois numeros e a operação até que o usuário
informe a saída*/
let continua = 's';
let num1, num2;
let operacao;
while (continua == 's') {
    num1 = parseInt(prompt('Informe o primeiro número'));
    num2 = parseInt(prompt('Informe o segundo número'));
    operacao = prompt('Operação (+,-,*,/)');
    if (operacao == '+') { alert('Resultado: ' + (num1 + num2)); }
    else if (operacao == '-') { alert('Resultado: ' + (num1 - num2)); }
    else if (operacao == '*') { alert('Resultado: ' + (num1 * num2)); }
    else if (operacao == '/') { alert('Resultado: ' + (num1 / num2)); }
    else { alert('Operação inválida'); }
    continua = prompt('Deseja permanecer no programa? <s/n>');
}
alert('Programa finalizado');