/*Generacion de un formulario con javascript*/

//creacion de la estructura general del formulario
const mainDiv = document.querySelector(".container");

const form = document.createElement("form");
mainDiv.appendChild(form);

const fieldsetContacto = document.createElement("fieldset");
fieldsetContacto.classList.add("contacto");
form.appendChild(fieldsetContacto);

const fieldsetOpciones = document.createElement("fieldset");
fieldsetOpciones.classList.add("opciones-pizza");
form.appendChild(fieldsetOpciones);

const fieldsetRestaurante = document.createElement("fieldset");
fieldsetRestaurante.classList.add("restaurante");
form.appendChild(fieldsetRestaurante)

const fieldsetAcciones = document.createElement("fieldset");
fieldsetAcciones.classList.add("acciones");
form.appendChild(fieldsetAcciones);

//creacion de la seccion Restaurante
const leyendaRestaurante = document.createElement("legend");
leyendaRestaurante.textContent = "Sobre el pedido";
fieldsetRestaurante.appendChild(leyendaRestaurante);

const labelSelect = document.createElement("label");
labelSelect.setAttribute("for", "restaurante");
labelSelect.textContent = "Elige un restaurante";
fieldsetRestaurante.appendChild(labelSelect);

const selectRestaurante = document.createElement("select");
selectRestaurante.setAttribute("name", "restaurante");
selectRestaurante.setAttribute("id", "restaurante");
selectRestaurante.setAttribute("required", "true");
fieldsetRestaurante.appendChild(selectRestaurante);

const opcionA = document.createElement("option");
opcionA.setAttribute("value","res1");
opcionA.textContent = "La casina de Paulina";

const opcionB = document.createElement("option");
opcionB.setAttribute("value","res2");
opcionB.textContent = "Ixchel's Hollywok";

const opcionC = document.createElement("option");
opcionC.setAttribute("value","res3");
opcionC.textContent = "PizzalPilpil";

const opcionD = document.createElement("option");
opcionD.setAttribute("value","res4");
opcionD.textContent = "La Pizza Pagana de Jana";

selectRestaurante.appendChild(opcionA);
selectRestaurante.appendChild(opcionB);
selectRestaurante.appendChild(opcionC);
selectRestaurante.appendChild(opcionD);

//creacion de la seccion de acciones
//boton de envio
const submit = document.createElement("button");
submit.setAttribute("type", "submit");
submit.setAttribute("name", "submit");
submit.setAttribute("id", "submit");
submit.textContent = "Realizar Pedido";
submit.classList.add("cta");
fieldsetAcciones.appendChild(submit);

const reset = document.createElement("button");
reset.setAttribute("type", "reset");
reset.setAttribute("name", "reset");
reset.setAttribute("id", "reset");
reset.textContent = "Borrar formulario";
fieldsetAcciones.appendChild(reset);