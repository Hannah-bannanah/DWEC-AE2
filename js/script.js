/*Generacion de un formulario con javascript*/

//creacion de la estructura general del formulario
const mainDiv = document.querySelector(".container");

const form = document.createElement("form");
form.setAttribute("action", "#");
form.setAttribute("method", "post");
mainDiv.appendChild(form);

const fieldsetGeneral = document.createElement("fieldset");
form.appendChild(fieldsetGeneral);

const leyendaFormulario = document.createElement("legend");
leyendaFormulario.textContent = "Realizar Pedido";
leyendaFormulario.classList.add("form-title");
fieldsetGeneral.appendChild(leyendaFormulario);

const fieldsetContacto = document.createElement("fieldset");
fieldsetContacto.classList.add("contacto");
fieldsetGeneral.appendChild(fieldsetContacto);

const fieldsetOpciones = document.createElement("fieldset");
fieldsetOpciones.classList.add("opciones-pizza");
fieldsetGeneral.appendChild(fieldsetOpciones);

const fieldsetRestaurante = document.createElement("fieldset");
fieldsetRestaurante.classList.add("restaurante");
fieldsetGeneral.appendChild(fieldsetRestaurante)

const fieldsetAcciones = document.createElement("fieldset");
fieldsetAcciones.classList.add("form__actions");
fieldsetGeneral.appendChild(fieldsetAcciones);

//creacion de la seccion Restaurante 
const leyendaRestaurante = document.createElement("legend");
leyendaRestaurante.textContent = "Sobre el pedido";
fieldsetRestaurante.appendChild(leyendaRestaurante);

const row1Rest = document.createElement("div");
row1Rest.classList.add("fieldset-row");
fieldsetRestaurante.appendChild(row1Rest);

const r1c1Rest = document.createElement("div");
r1c1Rest.classList.add("fieldset-column");
row1Rest.appendChild(r1c1Rest);

const labelSelect = document.createElement("label");
labelSelect.setAttribute("for", "restaurante");
labelSelect.textContent = "Elige un restaurante";
r1c1Rest.appendChild(labelSelect);

const selectRestaurante = document.createElement("select");
selectRestaurante.setAttribute("name", "restaurante");
selectRestaurante.setAttribute("id", "restaurante");
selectRestaurante.setAttribute("required", "true");
r1c1Rest.appendChild(selectRestaurante);

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

const row2Rest = document.createElement("div");
row2Rest.classList.add("fieldset-row");
fieldsetRestaurante.appendChild(row2Rest);

const r2c1Rest = document.createElement("div");
r2c1Rest.classList.add("fieldset-column");
r2c1Rest.classList.add("inline-column");
row2Rest.appendChild(r2c1Rest);

const recoger = document.createElement("input");
recoger.setAttribute("type", "checkbox");
recoger.setAttribute("name", "recoger");
recoger.setAttribute("id", "recoger");
recoger.setAttribute("value", "s");
r2c1Rest.appendChild(recoger);

const labelRecoger = document.createElement("label");
labelRecoger.setAttribute("for", "recoger");
labelRecoger.textContent = "Quiero recoger mi pedido en el restaurante";
r2c1Rest.appendChild(labelRecoger);

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