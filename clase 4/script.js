/* Practica en Clase

const input = document.getElementById("exampleInputEmail1") ;
const password = document.getElementById("exampleInputPassword1");

const form = document.getElementById("Formulario");

form.addEventListener("submit", function(event){
    event.preventDefault();
    alert('Este es el evento del boton submit');
}); */

/* Actividad práctica:

Ejercicios:      */

// 1. Selecciona un elemento por su ID y cambia su texto.
document.getElementById("email").textContent = 'Correo electrónico';
document.getElementById("email").innerHTML = "<b>Correo electrónico</b>";

// 2. Cambia el color de fondo de un elemento al hacer clic en él.
const campoEmail = document.getElementById("exampleInputEmail1");
campoEmail.addEventListener("click", function(){
    console.log('Click detectado')
    campoEmail.style.backgroundColor = "orange";
});

// 3. Selecciona todos los elementos con una clase específica y cámbiales el texto.
const elementos = document.querySelectorAll(".elem")
// 8. Usa querySelectorAll para seleccionar múltiples elementos y recorrerlos con un bucle.
for(let i=0; i<elementos.length; i++){
    elementos[i].textContent = "elemento";
}

// 4. Agrega una nueva clase a un elemento seleccionado.
const textoLista = document.getElementById("textoList");
textoLista.classList.add("texto1");

// 5. Elimina una clase existente de un elemento.
const textLista = document.getElementById("textoList");
textLista.classList.remove("fondoGris");

//  6. Cambia el contenido HTML de un div usando innerHTML.
const divContrasenia = document.getElementById("contSub");
divContrasenia.innerHTML = '<label for="nomUsuario" >Ingrese su usuario:</label>'+
                            '<input type="text" id="nomUsuario">';

// 7. Muestra en la consola el texto de un párrafo seleccionado.
const parrafo = document.getElementById("parrafo1").textContent;
console.log(parrafo1);

// 9. Crea un botón que, al hacer clic, oculte un párrafo.
const botonOcultar = document.getElementById("btnOcultar");
const parrafoOcultar = document.getElementById("parrafo1");
botonOcultar.addEventListener('click', function(){
    parrafoOcultar.style.display = "none";
});

// 10. Agrega un nuevo elemento HTML a un contenedor existente.
