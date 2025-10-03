let numero1 = Number(prompt('Digite o primeiro numero'));
let numero2 = Number(prompt('Digite o segundo numero'));
let operacao = prompt('Digite uma operação(+,-,*,/)');
let resultado;
switch (operacao) {
    case "+":
        document.write(resultado = numero1 + numero2);
        break;
    case "-":
        document.write(resultado = numero1 - numero2);
        break;
    case "*":
        document.write(resultado = numero1 * numero2);
        break;
    case "/":
        document.write(resultado = numero1 / numero2);
} 