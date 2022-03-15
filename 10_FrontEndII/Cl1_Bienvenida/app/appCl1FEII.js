alert("Esto es una alerta... DE SUMATORIA EN ARRAY");

let i=0;
let arraySuma = [0,0,0,0];
let sumandoArray=0;
// arraySuma[0] = prompt("Ingrese numero 1");

for (i = 0; i < arraySuma.length; i++) {
    orden = i + 1;
    arraySuma[i]= prompt("Ingrese el dato # "+ orden);
    
}
console.log("Array para sumar 4 valores ingresados: " + arraySuma );


for (i = 0; i < arraySuma.length; i++) {
    sumandoArray += parseInt(arraySuma[i]);
    }
console.log("Suma de los cuatro números: " + sumandoArray);
document.getElementById("resultado").innerHTML = `${sumandoArray}`;
document.getElementsByClassName("claseSaludo")[0].innerHTML += `Cambiando el mundo`;