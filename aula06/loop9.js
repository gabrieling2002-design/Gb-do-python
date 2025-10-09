/*6) Solicite ao usuário um número e exiba a
tabuada de multiplicação desse número de 1 a 10*/
let contador = 1;
let numero = Number(prompt('Digite o número'));
while (contador <=10){
    document.write(numero +' x '+contador+' = '+ numero*contador+'<br>');
    contador ++;
}
// outra situação (pedindo o final do multiplicador)
let ctd = 1;
let num = Number(prompt('Informe o número'));
let final = Number(prompt('Informe até quanto quer multiplicar'));
while (ctd <= final){
    document.write(num +' x '+ctd+' = '+ num*ctd+'<br>');
    ctd++;
}