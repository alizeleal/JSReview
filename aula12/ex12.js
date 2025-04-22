let timeNow = new Date();
let hour = timeNow.getHours();
let minute = timeNow.getMinutes();

console.log(`Hora atual: ${hour}:${minute} horas`);

if (hour >= 0 && hour < 12) {
    console.log("Bom dia!");
} else if (hour >= 12 && hour < 18) {
    console.log("Boa tarde!");
}
else {
    console.log("Boa noite!");
}

// switch case
let day = timeNow.getDay(); // 0 - Domingo, 1 - Segunda, 2 - Terça, 3 - Quarta, 4 - Quinta, 5 - Sexta, 6 - Sábado

switch (day) {
    case 0: 
        console.log("Hoje é domingo!");
        break;
    case 1:             
        console.log("Hoje é segunda-feira!");
        break;
    case 2:
        console.log("Hoje é terça-feira!");
        break;
    case 3:
        console.log("Hoje é quarta-feira!");
        break;
    case 4:
        console.log("Hoje é quinta-feira!");
        break;
    case 5:
        console.log("Hoje é sexta-feira!");
        break;
    case 6:
        console.log("Hoje é sábado!");
        break;
    default:
        console.log("Dia inválido!");
        break;
}

// lembrete: preciso usar break quando for implementar switch case para não entrar em erros de lógica, ou seja, não entrar em outros cases sem querer.
// o break encerra a execução do switch case, evitando que outros cases sejam executados.
// o default é o caso padrão, que será executado se nenhum dos outros cases for verdadeiro.
// o default é opcional, mas é uma boa prática incluí-lo para tratar casos inesperados.