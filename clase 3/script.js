/* const boton = document.getElementById("#click");

function calcular(){
    let num1 = parseFloat(prompt("Ingrese el primer número: "));
    let num2 = parseFloat(prompt("Ingrese el segundo número: "));
    let resultado = num1 * num2;
    alert(`El resultado de la multiplicación es: ${resultado}`);
}

const primerInput = document.querySelector("input[type='text'] .primerInput #primerInput"); */

/* PRACTICA EN CLASE 

const input = document.getElementById("exampleInputEmail1") ;
const password = document.getElementById("exampleInputPassword1");

const form = document.getElementById("Formulario");

form.addEventListener("submit", function(event){
    event.preventDefault();
    alert('Se guardo el ');
}); 

// evento boton submit 
document.querySelector("#Formulario").addEventListener('submit', function(){
    alert('Se guardo el formulario');
});

// evento input 
document.getElementById("emailInput").addEventListener("input", function(){
    document.getElementById("salidaEmail").textContent = `Escribiste: ${this.value}`;
});

// evento focus 
const camposForm =document.querySelectorAll(".form-control");

for(let i=0; i<camposForm.length; i++){
    camposForm[i].addEventListener("focus", function(){
        this.style.backgroundColor = "lightblue";
    });
}

// evento click 
document.querySelector(".button").addEventListener("click", function(){
    alert('Click detectado');
});

const inputsForm =document.querySelectorAll(".form-control");

for(let i=0; i<inputsForm.length; i++){
    inputsFormsForm[i].addEventListener("focus", function(){
         
    });
} 

document.getElementById("parrafo2").textContent = "Hola mundo"; */


/* ACTIVIDAD PRÁCTICA - PRIMERA PARTE: */

// 1. Selecciona un elemento por su ID y cambia su texto.
document.getElementById("email").textContent = "Correo electrónico";
document.getElementById("email").innerHTML = "<b>Correo electrónico</b>";

// 2. Cambia el color de fondo de un elemento al hacer clic en él.
const campoEmail = document.getElementById("inputEmail");
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
divContrasenia.innerHTML = '<label for="nomUsuario" >Ingrese su mensaje:</label>'+ 
                '<input type="text" class="form-control" id="exampleInputNombre" placeholder="Mensaje">'+
                '<label class="form-check-label" for="exampleCheck1"><a href="#">Acepto las politicas de privacidad</a></label>'+
                '<input type="checkbox" class="form-check-input" id="exampleCheck1"></input>'

// 7. Muestra en la consola el texto de un párrafo seleccionado.
const parrafo = document.getElementById("parrafo1").textContent;
console.log(parrafo);

// 9. Crea un botón que, al hacer clic, oculte el parrafo 1.
const botonOcultar = document.getElementById("btnOcultar");
const parrafoOcultar = document.getElementById("parrafo1");
botonOcultar.addEventListener('click', function(){
    parrafoOcultar.style.display = "none";
});

// 10. Agrega un nuevo elemento HTML a un contenedor existente.
const divModificar = document.getElementById("subCont1");
divModificar.innerHTML += '<input type="date" class="form-control" id="exampleInputFecha">';


/* ACTIVIDAD PRÁCTICA - SEGUNDA PARTE: */ 

/* Actividad práctica:
    ○	Crear un formulario interactivo que:
        ■	Valide un campo de texto en tiempo real.
        ■	Muestre un mensaje de confirmación al enviarlo. */
    
//Creo formulario
const formUsu = document.createElement("form");

const labelUsu = document.createElement("label");
labelUsu.setAttribute("for", "inputUsu");
labelUsu.textContent = "Ingrese su nombre: ";
const inputUsu = document.createElement("input");
inputUsu.type = "text";
inputUsu.setAttribute("id", "inputUsu");

const labelContra = document.createElement("label");
labelContra.setAttribute("for", "inputContra");
labelContra.textContent = "Ingrese su contraseña: ";
const inputContra = document.createElement("input");
inputContra.type = "password";
inputContra.setAttribute("id", "inputContra");

const btnEnviar = document.createElement("button");
btnEnviar.textContent = "Enviar";
btnEnviar.type = "submit";

// Guardar elementos en el formulario
formUsu.appendChild(labelUsu);
formUsu.appendChild(inputUsu);
formUsu.appendChild(labelContra);
formUsu.appendChild(inputContra);
formUsu.appendChild(btnEnviar);

// Agregar formulario al body
document.body.appendChild(formUsu);

// Validar
formUsu.addEventListener('submit', function(e){
    e.preventDefault(); // Evito que se envie el formulario

    if(inputContra.value.length < 8){
        alert("La contraseña debe tener 8 o más caracteres.");
    } else {
        alert(`Formulario enviado correctamente. Usuario: ${inputUsu.value}`)
    }
})

// 1. Crea un botón que muestre un mensaje en consola al hacer clic.
const botonMensaje = document.getElementById("btnLimpiar");
botonMensaje.addEventListener('click', function(){
    console.log('¡Boton Clickeado!');
})

// 2. Haz que un campo de texto cambie su color de fondo al escribir en él.
const campoApellido = document.getElementById("exampleInputApellido");
campoApellido.addEventListener("keyup", function(){
    campoApellido.style.backgroundColor = "lightblue";
});

// 3. Implementa un contador que aumente cada vez que se haga clic en un botón.
let contador = 0;

const botonContador = document.getElementById("btnContar");
botonContador.addEventListener('click', function(){
    contador++;
    console.log(`Contador: ${contador}`)
});

// 4. Muestra un mensaje de error si un campo de texto está vacío al enviar un formulario.
const mensajeError = document.createElement("span");
mensajeError.style.color = "red";
formUsu.appendChild(mensajeError);

formUsu.addEventListener('submit', function(e){
    e.preventDefault();
    if(inputUsu.value === "" || inputContra.value === "") {
        mensajeError.textContent = "Debe completar todos los campos para enviar el formulario.";
    } else {
        mensajeError.textContent = "";
    }
});

// 5. Cambia la posición de un elemento cuando se pase el ratón sobre él.
const parrafo1 = document.getElementById("parrafo1");
parrafo1.addEventListener('mouseover', function() {
    this.style.position = "absolute";
    this.style.top = "700px";
    this.style.left = "300px";
});

// 6. Detecta y muestra en la consola la tecla presionada por el usuario.
const inputTecla = document.getElementById("inputPresionar");
inputTecla.addEventListener('keydown', function(e) {
    console.log('Tecla presionada:', e.key);
});

// 7. Implementa un botón que oculte o muestre un elemento al hacer clic (toggle).
const botonToggle = document.getElementById("botonMostrar");
const parrafoToggle = document.getElementById("parrMostrar");
parrafoToggle.textContent = "Este es mi párrafo mostrado.";

botonToggle.addEventListener('click', function(){
    // Si esta oculto, lo muestra
    if(parrafoToggle.style.display === "none"){ 
        parrafoToggle.style.display = "block";
    } else {
        //Si esta visible, lo oculta
        parrafoToggle.style.display = "none";
    }
});

// 8. Crea un campo de selección (dropdown) que actualice un párrafo con la opción seleccionada.
const select = document.getElementById("select");
const parrafoSelect = document.getElementById("parrSelect");

select.addEventListener('change', function(){
    parrafoSelect.textContent = `Opcion Seleccionada: ${this.value}`;
})

// 9. Implementa un formulario con validación para correos electrónicos.

//Crear email
const formEmail = document.createElement("form");
const inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.placeholder = "Ingrese su correo electrónico";
const mensError = document.createElement("span");
const btnEnviarEmail = document.createElement("button");
btnEnviarEmail.textContent = "Enviar";

// Colocar elementos dentro del formulario
formEmail.appendChild(inputEmail);
formEmail.appendChild(mensError);
formEmail.appendChild(btnEnviarEmail);

// Agregar formulario al body
document.body.appendChild(formEmail);

// Validar Email
formEmail.addEventListener('submit', function(e){
    e.preventDefault(); // Evitar que se envíe el formulario
    
    if(!inputEmail.value.includes("@")){
        mensError.textContent = "Correo Electrónico inválido. Verfique que contenga @";
    }else{
        mensError.textContent = "Correo Electrónico válido.";
        alert(`Correo enviado: ${inputEmail.value}`);
    }
});

// 10. Haz un evento que cambie el texto de un botón al hacer clic en él.
btnEnviarEmail.addEventListener('click', function(){
    if (inputEmail.value.includes("@")){
        this.textContent = "Enviado";
    }
})

/* PRACTICA EN CLASE - OBJETOS Y ARREGLOS
// Objetos
const persona = {
    nombre: "Juan",
    edad: 30,
    domicilio: "Calle Falsa 123",
    saludar: function(){
        return `Hola, soy ${this.nombre}. Tengo ${this.edad} años y vivo en ${this.domicilio}.`;
    }
}
console.log(persona.saludar());

// Eventos con addEvent
const boton = document.getElementById("miBoton");
boton.addEventListener('click', function(){
    alert('¡Botón clickeado!');
})

// Evento push() y pop()
const frutas = ["manzana", "banana", "naranja"];
frutas.push("uva");
console.log(frutas);

frutas.pop(); // elimina el último elemento del arreglo
console.log(frutas);

// shift() y unshift()
const numeros = [1, 2, 3];
numeros.unshift(0);  // Agrega un elemento al principio
console.log(numeros);

numeros.shift(); // Elimina el primer elemento
console.log(numeros);

// forEach()
const colores = ["rojo", "verde", "azul"];
colores.forEach(function(color){
    console.log(color);
})

// map(): a diferencia del forEach(), devuelve un nuevo array
const numeros2 = [1, 2, 3];
const numerosDoblados = numeros2.map(function(numero){
    return numero * 2;
});
console.log(numerosDoblados);

// filter(): filtra los elementos de un array según una condición
const numeros3 = [1, 2, 3, 4, 5];
const numerosPares = numeros3.filter(function(numero){
    return numero % 2 === 0;
});
console.log(numerosPares);

// reduce()
const numeros4 = [1, 2, 3, 4];
const suma = numeros4.reduce(function(acumulador, numero){
    return acumulador + numero;
},0); 
console.log(suma); */

/* ACTIVIDAD PRÁCTICA - TERCERA PARTE: */

/* Crear un arreglo de objetos donde cada objeto represente un producto con propiedades como nombre, precio, y cantidad. Implementar funciones para:
Agregar productos.
Calcular el costo total.
Filtrar productos por precio */

const arregloProductos = [
    {   nombre: "Harina",
        precio: 2000,
        cantidad: 20
    },
    {   nombre: "Salsa de tomate",
        precio: 1800,
        cantidad: 30
    },
    {   nombre: "Aceite",
        precio: 3000,
        cantidad: 50
    }
];
console.log(arregloProductos);

// Agregar productos
arregloProductos.push({nombre: "Azúcar", precio: 1500, cantidad: 20});
arregloProductos.push({nombre: "Sal", precio: 1000, cantidad: 40});
console.log(arregloProductos); 

// Calcular el costo total
const costoTotal = arregloProductos.reduce(function(total, producto){
    return total + (producto.precio * producto.cantidad);
}, 0);
console.log(`Costo total: ${costoTotal}`);

// Filtrar productos por precio
const productosBaratos = arregloProductos.filter(function(producto){
    return producto.precio < 2000;
});
console.log(productosBaratos);

//1. Crea un arreglo con 5 números y muestra el tercero en consola
let arrNumeros = [4,5,6,7,8];
elem3 = arrNumeros[2];
console.log(`El tercer elemento del array es: ${elem3}`);

//2. Agrega un nuevo elemento a un arreglo usando push.
const arrUtiles = ["lápiz", "goma", "lapicera"];
console.log(arrUtiles);
arrUtiles.push("corrector");
console.log(`Arreglo luego de agregar un elemento con push [${arrUtiles}]`);

//3. Elimina el último elemento de un arreglo y muéstralo en consola.
arrNumeros.pop();
console.log(`Arreglo luego de eliminar un elemento con pop [${arrNumeros}]`);

// 4. Usa map para multiplicar por 2 cada número de un arreglo.
const arrNumeros2 = [4, 5, 6];
const numDoblados = arrNumeros2.map(function(numero){
    return numero * 2;
});
console.log(`Arreglo luego de multiplicar cada elemento * 2: [${numDoblados}]`);

// 5. Filtra un arreglo para obtener solo los números mayores a 10.
const arrNumeros3 = [6, 9, 12, 11, 4];
const numMayores = arrNumeros3.filter(function(numero){
    return numero > 10;
});
console.log(`Arreglo de números mayores a 10: [${numMayores}]`);

// 6. Declara un objeto con las propiedades nombre, edad, y profesión.
const persona = {nombre: "Erica", edad: 25, profesion: "Traumatóloga"};
console.log(persona);

// 7. Accede y muestra el valor de una propiedad de un objeto.
console.log("La edad de la persona es: ", persona.edad);

// 8. Agrega un método a un objeto que devuelva un saludo personalizado.
persona.saludar = function(){
    return `Hola, mi nombre es ${this.nombre} y son ${this.profesion}`;
}
console.log(persona.saludar())

//9. Usa reduce para sumar todos los números de un arreglo.
const arrNumeros4 = [1, 2, 3, 4];
const sumados = arrNumeros4.reduce(function(acumulador, numero){
    return acumulador + numero;
},0); 
console.log(`La suma de los números del arreglo [${arrNumeros4}] es ${sumados}`);

// 10. Combina arreglos y objetos: Crea un arreglo de objetos y recórrelo para mostrar el nombre de cada elemento.
const arregloFrutas = [
    {   nombre: "Manzana",
        precioKl: 1000,
        cantidad: 20
    },
    {   nombre: "Banana",
        precioKl: 1800,
        cantidad: 30
    },
    {   nombre: "Sandia",
        precioKl: 2000,
        cantidad: 25
    }
];
console.log(arregloFrutas);

arregloFrutas.forEach(function(fruta){
    console.log(fruta.nombre);
});