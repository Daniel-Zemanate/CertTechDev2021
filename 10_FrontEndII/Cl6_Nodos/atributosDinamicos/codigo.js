//1- Agregar a la tarjeta, el atributo "class" con el valor "card"
let tarjeta = document.getElementById("tarjeta");
tarjeta.classList.add("card");

//2- Agregar a la imagen, el atributo "src" con el valor "https://www.youtube.com/img/desktop/yt_1200.png"

let imagenYoutube = document.querySelector("#logo");
imagenYoutube.setAttribute("src","https://www.youtube.com/img/desktop/yt_1200.png");


//3- Quitarle al titulo la clase que le está dando un formato feo
let titulo = document.querySelector(".titulo-feo");
titulo.classList.remove("titulo-feo");

//4- Chequear si el link a youtube posee o no el atributo href
let linkYoutube = document.getElementById("link_youtube");
console.log(`Tiene link? ${linkYoutube.hasAttribute("link_youtube")}`);

//5- Obtener el href del link a wikipedia y mostrarlo por consola
console.log(`El link es: ${linkYoutube.getAttribute("href")}`);
