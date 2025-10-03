let idade = Number(prompt('Digite a sua iadade, por favor!'));
if (idade <= 12) {
    document.write('Você é criança');
} else if (idade <= 18) {
    document.write('Você é adolescente');
}
else if (idade <= 65) {
    document.write('Você é adulto');
} else{
    document.write('Você é idoso');
}
    