const input = document.getElementById("exampleInputEmail1") ;
const password = document.getElementById("exampleInputPassword1");

const button = document.getElementById("button");

document.getElementById("email").textContent = "Correo electrónico";
document.getElementById("email").innerHTML = "<b>Correo electrónico</b>";

button.addEventListener("click", function(event){
    event.preventDefault();
    console.log(input.value);
});
