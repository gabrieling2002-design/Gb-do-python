let salario = Number(prompt('Informe o salário'));
let vt = salario * 0.06;
let inss;
if (salario < 2500){
    inss = salario * 0.08;
} else {
    inss = salario * 0.11;
}
document.write('<br>Desconto do VT: ',vt);
document.write('<br>Desconto do INSS: ',vt);