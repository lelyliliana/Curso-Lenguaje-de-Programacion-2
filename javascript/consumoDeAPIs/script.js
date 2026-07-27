/*
==========================================
LABORATORIO 15
Consumo de APIs
==========================================
Objetivo:
Construir una interfaz consumiendo una API.
==========================================
*/

const consultar =
document.getElementById("consultar");

const limpiar =
document.getElementById("limpiar");

const resultado =
document.getElementById("resultado");

consultar.addEventListener(
"click",
consultarProductos
);

limpiar.addEventListener(
"click",
function(){

resultado.textContent =
"Esperando consulta...";

}
);

async function consultarProductos(){

resultado.innerHTML =
"Cargando productos...";

try{

const respuesta =
await fetch(
"https://fakestoreapi.com/products"
);

const productos =
await respuesta.json();

let html="";

productos.forEach(producto=>{

html+=`

<div class="producto">

<h3>

${producto.title}

</h3>

<img
src="${producto.image}"
width="120">

<p>

<strong>

Precio:

</strong>

$ ${producto.price}

</p>

<p>

${producto.category}

</p>

</div>

`;

});

resultado.innerHTML=html;

}

catch(error){

resultado.innerHTML=
error.message;

}

}