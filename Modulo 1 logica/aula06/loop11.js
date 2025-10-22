/*8) Leia o nome do time de 10 torcedores, e ao final informe quantos
 são flamenguistas, vascaínos, tricolores, botafoguenses, ou outro time.*/
let fla = 0;
let vas = 0;
let flu = 0;
let bot = 0;
let out = 0;
for(let i = 0; i<10; i++){
    time = prompt('Qual o seu time?');
    switch (time){
        case 'fla':
            fla++;
            break;
        case 'flu':
            flu++;
            break;
        case 'vas':
            vas++;
            break;
        case 'bot':
            bot++
            break;
        default:
            out++;
    }
}
document.write('Torcedores do Flamengo' + fla + '<br>');
document.write('Torcedores do Vasco' + vas + '<br>');
document.write('Torcedores do Fluminense' + flu + '<br>');
document.write('Torcedores do Botafogo' + bot + '<br>');
document.write('Outros torcedores' + out + '<br>');