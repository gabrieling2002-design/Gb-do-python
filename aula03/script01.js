/*criar um script para ler nome e idade
e escrever ao final o nome e a idade*/

let nome = prompt('Nome:');        
let idade = Number(prompt('Idade:'));
//let idade = parserInt(Prompt('Idade'));
//"\nIdade"  '\n' <- para quebrar linha

document.write('Nome:' + nome + '<br>Idade:' + idade);
/*
"Alert" para aparecer direto no navegador 
ao inves de usar "console.los"
"document" para tirar tudo do F12
"<br>" para quebrar linha com document.write
*/
