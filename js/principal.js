
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida nutricionista"

//console.log("titulo");
//console.log("titulo.textContent");


/* IMC = massa/altura^2  */
var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = document.querySelector(".info-peso");
var peso = tdPeso.textContent;
var tdAltura = document.querySelector(".info-altura");
var altura = tdAltura.textContent;
var tdImc = paciente.querySelector(".info-imc");

var pesoEhvalido = true;
var alturaEhvalida = true;
// validar o peso
if (peso <=0 || peso >= 1000) {
    console.log ("Peso inválido")
    pesoEhvalido = false;
    tdImc.textContent = "Peso inválido";
}
//validar altura
if (altura <=0 || altura >3) {
    console.log ("Altura invalida")
    alturaEhvalida = false;
    tdImc.textContent = "Altura invalida";
}

//validar peso e altura
if (alturaEhvalida && pesoEhvalido) {
    var imc = peso / (altura*peso);
    tdImc.textContent = imc;
}

console.log(paciente); //tr
console.log(tdPeso); //td que tem peso
console.log(tdAltura); //td que tem altura
console.log(peso); // valor do peso
console.log(altura); // valor da altura



