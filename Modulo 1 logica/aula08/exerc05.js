//5 - Crie uma Função para Contar de 1 até um Número Informado
function boasvindas(){
    alert('Bem vindo ao programa!');

}
function fimdoprograma(){
    alert('Fim do programa!');
}
function contar1(y){
    for(let i = 1; i <= y; i++){
        document.write(i+'<br>');
    }
}
boasvindas();
let num1 = parseInt(prompt('Informe o número'));
contar1(num1);
fimdoprograma();