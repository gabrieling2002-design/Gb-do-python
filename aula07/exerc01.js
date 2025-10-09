/*descrição: peça ao usuario para digitar um numero.
Informe se ele é par ou ímpar. O programa deve continuar solicitando
novos números até que ele digite zero.*/
let numero = Number(prompt('Digite o número'));
while (numero != 0){
    if ((numero % 2) == 0)  {
        alert('Número par');
    } else {
        alert('Número ímpar');
    }
    numero = Number(prompt('Digite o número <0 para sair>'));
}