/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */

  datosPersona.nombre = prompt("Ingresa tu nombre"); 
  datosPersona.edad = 2022 - parseInt(prompt("Ingresa el año en que naciste"));
  datosPersona.ciudad = prompt("Ingresa la ciudad donde vives");
  datosPersona.interesPorJs = confirm("Te interesa Javascript?") ? "SI" : "NO";
    
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  
  let nombre = document.querySelector("#nombre");
  let edad = document.querySelector("#edad");
  let ciudad = document.querySelector("#ciudad");
  let interesEnJS = document.querySelector("#javascript");
  
  nombre.innerHTML = datosPersona.nombre;
  edad.innerHTML = datosPersona.edad;
  ciudad.innerHTML = datosPersona.ciudad;
  interesEnJS.innerHTML = datosPersona.interesPorJs;
  
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  let fila = document.querySelector("#fila");
  
  if (!fila.hasChildNodes()) {
    
    listado.forEach(tarjetas => {
      const seccion = document.createElement("section");
      seccion.classList.add("caja");

      seccion.innerHTML = `
      <img src=${tarjetas.imgUrl} alt=${tarjetas.lenguajes} />
      <p class="lenguajes">${tarjetas.lenguajes}</p>
      <p class="bimestre">${tarjetas.bimestre}</p>`;

      fila.appendChild(seccion);
      
    });
    


  }
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 
  let sitio = document.querySelector("#sitio");
  sitio.classList.toggle("dark");


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
let sobreMi = document.querySelector("#sobre-mi");
window.addEventListener("keydown",function(tecla){
  if(tecla.key == "f"){
    sobreMi.classList.remove("oculto");
  }
});