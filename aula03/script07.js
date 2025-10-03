let nota01 = Number(prompt('informe a primeira nota'));
let nota02 = Number(prompt('Informe a segunda nota'));
let soma = nota01 + nota02 
let divisao = (nota01 + nota02) / 2;
if (divisao >= 6) {
    document.write('Parabéns! você foi aprovado');
}
else{
    document.write('Que triste! você foi reprovado');
}