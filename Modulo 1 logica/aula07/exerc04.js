//4. Ler 10 números e mostrar a média
let num;
let somanum = 0;
for (let i=0; i<10; i++){
    num = Number(prompt('Número'));
    somanum = somanum + num;
}
document.write('Média: '+(somanum/10));