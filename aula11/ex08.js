console.log("Aula 11 - Condicionais");

let velocidade = 99 // km/h;
let limite = 80;

if (velocidade > limite) {
  console.log("Você foi multado!");
  console.log("Você estava a " + velocidade + " km/h.");
  console.log("O limite de velocidade é " + limite + " km/h.");     
    console.log("Você ultrapassou o limite de velocidade em " + (velocidade - limite) + " km/h.");  
    console.log("Dirija com cuidado!");
    console.log("Tenha um bom dia!");
}

else {
    console.log("Você não foi multado!");
    console.log("Parabéns, você está dentro do limite de velocidade!");
    console.log("Continue assim!"); 
    console.log("Tenha um bom dia!");
}