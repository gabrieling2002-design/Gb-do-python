/*9) Leia o salario e o sexo de n funcionários, e ao final informe: 
- qtd de funcionários de cada sexo 
- a soma do salário das mulheres 
- a soma do salário dos homens 
- a média salarial dessa empresa 
- o programa termina quando for digitado "fim"*/

let salario, somasalf = 0, somasalm = 0, qtdm = 0, qtdf = 0;
let controle = 'Continua', sexo;
while (controle != 'fim'){
    salario = parseFloat(prompt('Informe o salário'));
    sexo = prompt('Informe o sexo');
    if (sexo == 'f' || sexo == 'F'){
        qtdf++; somasalf += salario;
    } else if (sexo == 'm' || sexo == 'M'){
        qtdm++; somasalm += salario;
    } else {(alert('Sexo inválido'));}
    controle = prompt('Deseja continuar? digite fim para sair');
}
document.write('Quantidade de mulheres: '+qtdf+' Salários femininos: '+somasalf+'<br>');
document.write('Quantidade de homens: '+qtdm+' Salários masculinos: '+somasalm+'<br>');
document.write('Média dos salários: '+((somasalf+somasalm)/(qtdf+qtdm)));