var nombre,apellido,genero,edad,email,numero;
if(nombre == undefined){
    document.getElementById("name").innerHTML = 'Antonella Sar';
    document.getElementById("lastName").innerHTML = 'Martinez Alvarado';
    document.getElementById("genero").innerHTML = 'Femenino';
    document.getElementById("age").innerHTML = '52';
    document.getElementById("email").innerHTML = 'antonella.martinez@gmail.com';
    document.getElementById("number").innerHTML = '925513016';
}
else {
    document.getElementById("name").innerHTML = nombre;
    document.getElementById("lastName").innerHTML = apellido;
    document.getElementById("genero").innerHTML = genero;
    document.getElementById("age").innerHTML = edad;
    document.getElementById("email").innerHTML = email;
    document.getElementById("number").innerHTML = numero;
}

function editarperfil(){
    document.getElementById("name").innerHTML = document.getElementById("boton").value;
    nombre=document.getElementById("boton").value;
}
export function cargar(){
    document.getElementById("name").innerHTML = nombre;
}