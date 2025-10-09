/*5) Solicite um nome ao usuário e peça a quantidade de vezes
 que ele deseja exibi-lo na tela. Utilize um loop while.*/
  let nome = prompt('Digite o seu nome');
  let quantidade = Number(prompt('Digite a quantidades de vezes que você quer que apareça'));
  while (quantidade >=1){
    document.write(nome+ '<br>');
    quantidade--;
  }