//8 - Crie uma Função para Converter Metros para Centímetros
function converte(m){
    return m * 100;
}

let metros = parseInt(prompt('Informe quantos metros: '));
let centimetros = converte(metros);
alert('A metragem em centímetros é: ' + centimetros);