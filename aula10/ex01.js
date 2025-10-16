//1) Dado um sistema que armazena notas de alunos em uma matriz 3x3, realize as seguintes atividades:
//a) Criar uma matriz 3x3 preenchida com valores numéricos representando as notas dos alunos
let notas = [
    [8, 3, 9],
    [4, 7, 8],
    [9.5, 4, 9],
];
//b) Exibir a matriz no console de forma organizada. (usando uma estrutura de repetição)
console.log('Matriz é: ');
console.log(notas)
for(let i = 0; i < notas.length; i++){
    console.log(notas[i].join(' | '));
}
//c) Calcular e exibir a média das notas de cada aluno. 
console.log('Média dos alunos: ')
for (let i = 0; i < notas.length; i++){
    let soma = 0;
    for (let j = 0; j < notas[i].length; j++) {
        soma += notas[i][j]
    }
    let media = soma / notas[i].length;
    console.log('Aluno: '+(i+1)+'Média: '+media.toFixed(1));
}
//d) Identificar e exibir a maior nota da matriz.
//console.log('A maior nota é: '+ notas[2][0]);
let maiorNota = notas[0][0];
for (let i=0; i<notas.length; i++){
    for (let j=0; j<notas[i].length; j++){
        if (notas[i][j]>maiorNota){
            maiorNota = notas[i][j];
        }
    }
}
console.log('Maior nota é: '+maiorNota);
//e) Substituir todas as notas menores que 6 por 6, garantindo que nenhum aluno fique com nota abaixo desse valor.
for (let i = 0; i < notas.length; i++){
    for (let j = 0; j < notas[i].length; j++){
        if (notas[i][j] < 6){
            notas[i][j] = 6;
        }
    }
}
console.log(notas);