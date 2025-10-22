// suposição: um estoque de categoria
// categpria 0 = bebida
// categoria 1 = perecível 
// categoria 2 = ração 
// categoria 3 = limpeza
console.log("=========== Testando com case ")
let categoria = 5;
switch (categoria){
    case 0: 
        document.write("bebida");
        break;
    case 1:
        document.write("perecível");
        break;
    case 2:
        document.write("ração");
        break;
    case 3:
        document.write("limpeza");
        break;
    default:
        document.write('Categoria não encontrada');
        break;

}
console.log("=========== Testando com if ")
if (categoria == 0){
    document.write("<br>bebida");
} else if (categoria == 1){
    document.write("<br>perecível");
} else if (categoria == 2){
    document.write("<br>ração");
} else if (categoria == 3){
    document.write("<br>limpeza");
}