/**
 * Generacion de un formulario con javascript
 */

/*
===================================================== creacion de la estructura general del formulario ===================================================== 
*/
const mainDiv = document.querySelector(".container");

//formulario
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

//fieldset de Contacto
const fieldsetContacto = document.createElement("fieldset");
fieldsetContacto.classList.add("contacto");
fieldsetGeneral.appendChild(fieldsetContacto);

//fieldset de Opciones
const fieldsetOpciones = document.createElement("fieldset");
fieldsetOpciones.classList.add("opciones-pizza");
fieldsetGeneral.appendChild(fieldsetOpciones);

//fieldset del pedido
const fieldsetPedido = document.createElement("fieldset");
fieldsetPedido.classList.add("restaurante");
fieldsetGeneral.appendChild(fieldsetPedido);

//fieldset de los botones de Submit y Reset
const fieldsetAcciones = document.createElement("fieldset");
fieldsetAcciones.classList.add("form__actions");
fieldsetGeneral.appendChild(fieldsetAcciones);

/*
===================================================== creacion de la seccion Opciones-pizza ===================================================== 
*/
const leyendaOpciones = document.createElement("legend");
leyendaOpciones.textContent = "¿Cómo te apetece la pizza?";
fieldsetOpciones.appendChild(leyendaOpciones);

// div de la 1ª fila de las diversas opciones de pizza
const row1Opc = document.createElement("div");
row1Opc.classList.add("fieldset-row");
fieldsetOpciones.appendChild(row1Opc);

// div de la columna donde irán los ingredientes
const r1c1Opc = document.createElement("div");
r1c1Opc.classList.add("fieldset-column");

row1Opc.appendChild(r1c1Opc);

// Nodos de la etiqueta label (ingredientes)
const labelCheckbox = document.createElement("label");
labelCheckbox.textContent = "Elige los ingredientes";
r1c1Opc.appendChild(labelCheckbox);

// Contenedor del 1er Checkbox
const rowCbox1 = document.createElement("div");
rowCbox1.classList.add("inline-column");
r1c1Opc.appendChild(rowCbox1);
// Nodos del 1er Checkbox
const inpCbox1 = document.createElement("input");
inpCbox1.setAttribute("type", "checkbox");
inpCbox1.setAttribute("id", "cbox1");
inpCbox1.setAttribute("value", "Quesos");
//etiqueta label para el checkbox
const labelCbox1 = document.createElement("label");
labelCbox1.setAttribute("id", "labelcbox1");
labelCbox1.setAttribute("for", "inpCbox1");
labelCbox1.textContent = "Mezcla de quesos";
//Vincular el checkbox y label al div
rowCbox1.appendChild(inpCbox1);
rowCbox1.appendChild(labelCbox1);

// Contenedor del 2º Checkbox
const rowCbox2 = document.createElement("div");
rowCbox2.classList.add("inline-column");
r1c1Opc.appendChild(rowCbox2);
// Nodos del 2º Checkbox
const inpCbox2 = document.createElement("input");
inpCbox2.setAttribute("type", "checkbox");
inpCbox2.setAttribute("id", "cbox2");
inpCbox2.setAttribute("value", "Champiñones");
//etiqueta label para el checkbox
const labelCbox2 = document.createElement("label");
labelCbox2.setAttribute("id", "labelcbox2");
labelCbox2.setAttribute("for", "inpCbox2");
labelCbox2.textContent = "Champiñones";
//Vincular el checkbox y label al div
rowCbox2.appendChild(inpCbox2);
rowCbox2.appendChild(labelCbox2);

// Contenedor del 3er Checkbox
const rowCbox3 = document.createElement("div");
rowCbox3.classList.add("inline-column");
r1c1Opc.appendChild(rowCbox3);
// Nodos del 3er Checkbox
const inpCbox3 = document.createElement("input");
inpCbox3.setAttribute("type", "checkbox");
inpCbox3.setAttribute("id", "cbox3");
inpCbox3.setAttribute("value", "Bacon");
//etiqueta label para el checkbox
const labelCbox3 = document.createElement("label");
labelCbox3.setAttribute("id", "labelcbox3");
labelCbox3.setAttribute("for", "inpCbox3");
labelCbox3.textContent = "Bacon";
//Vincular el checkbox y label al div
rowCbox3.appendChild(inpCbox3);
rowCbox3.appendChild(labelCbox3);

// Contenedor del 4º Checkbox
const rowCbox4 = document.createElement("div");
rowCbox4.classList.add("inline-column");
r1c1Opc.appendChild(rowCbox4);
// Nodos del 4º Checkbox
const inpCbox4 = document.createElement("input");
inpCbox4.setAttribute("type", "checkbox");
inpCbox4.setAttribute("id", "cbox4");
inpCbox4.setAttribute("value", "Aceitunas");
//etiqueta label para el checkbox
const labelCbox4 = document.createElement("label");
labelCbox4.setAttribute("id", "labelcbox4");
labelCbox4.setAttribute("for", "inpCbox4");
labelCbox4.textContent = "Tomates cherry";
//Vincular el checkbox y label al div
r1c1Opc.appendChild(inpCbox4);
r1c1Opc.appendChild(labelCbox4);
//Vincular el checkbox y label al div
rowCbox4.appendChild(inpCbox4);
rowCbox4.appendChild(labelCbox4);

// Contenedor del 5º Checkbox (inline)
const rowCbox5 = document.createElement("div");
rowCbox5.classList.add("inline-column");
r1c1Opc.appendChild(rowCbox5);
// Nodos del 5º Checkbox
const inpCbox5 = document.createElement("input");
inpCbox5.setAttribute("type", "checkbox");
inpCbox5.setAttribute("id", "cbox5");
inpCbox5.setAttribute("value", "Pollo");
//etiqueta label para el checkbox
const labelCbox5 = document.createElement("label");
labelCbox5.setAttribute("id", "labelcbox5");
labelCbox5.setAttribute("for", "cbox5");
labelCbox5.textContent = "Pollo";
//Vincular el checkbox y label al div
rowCbox5.appendChild(inpCbox5);
rowCbox5.appendChild(labelCbox5);

// div de la columna donde irá una imagen
const r1c2Opc = document.createElement("div");
r1c2Opc.classList.add("fieldset-column");
row1Opc.appendChild(r1c2Opc);
//Nodo de la img
const img1 = document.createElement("img");
img1.setAttribute("alt", "pizza1");
img1.src = "images/pizza1.jpg";
img1.width = "200";
//Vincular la img al div
r1c2Opc.appendChild(img1);

/*
===================================================== creacion de la seccion Pedido ===================================================== 
*/



/*--------------------------
--------Radio Button 1------
---------------------------*/

//Div de la 1ª fila de los tipos de masa
const row2Opc = document.createElement("div");
row2Opc.classList.add("fieldset-row");
fieldsetOpciones.appendChild(row2Opc);

//Div de la columna donde irán los tipos de masa
const r2c1Opc = document.createElement("div");
r2c1Opc.classList.add("fieldset-column");
row2Opc.appendChild(r2c1Opc);

//Nodos de la etiqueta label (masa)
const labelRbMasa = document.createElement("label");
labelRbMasa.textContent = "Elige el tipo de masa";
r2c1Opc.appendChild(labelRbMasa);



//Contenedor del 1er Radio Button 
const rowRb1 = document.createElement("div");
rowRb1.classList.add("inline-column");
r2c1Opc.appendChild(rowRb1);
//Nodos 
const inpRb1 = document.createElement("input");
inpRb1.setAttribute("type", "radio");
inpRb1.setAttribute("id", "rb1");
inpRb1.setAttribute("value", "fina");
//Etiqueta label
const labelRbMasa1 = document.createElement("label");
labelRbMasa1.setAttribute("id", "labelrb1");
labelRbMasa1.setAttribute("for", "inpRb1");
labelRbMasa1.textContent="Fina";
//Vincular el radio button y label al div
rowRb1.appendChild(inpRb1);
rowRb1.appendChild(labelRbMasa1); 

//Contenedor del 2º Radio Button 
const rowRb2 = document.createElement("div");
rowRb2.classList.add("inline-column");
r2c1Opc.appendChild(rowRb2);
//Nodos 
const inpRb2 = document.createElement("input");
inpRb2.setAttribute("type", "radio");
inpRb2.setAttribute("id", "rb2");
inpRb2.setAttribute("value", "normal");
//Etiqueta label
const labelRbMasa2 = document.createElement("label");
labelRbMasa2.setAttribute("id", "labelrb2");
labelRbMasa2.setAttribute("for", "inpRb2");
labelRbMasa2.textContent="Normal";
//Vincular el radio button y label al div
rowRb2.appendChild(inpRb2);
rowRb2.appendChild(labelRbMasa2);

//Contenedor del 3er Radio Button 
const rowRb3 = document.createElement("div");
rowRb3.classList.add("inline-column");
r2c1Opc.appendChild(rowRb3);
//Nodos 
const inpRb3 = document.createElement("input");
inpRb3.setAttribute("type", "radio");
inpRb3.setAttribute("id", "rb3");
inpRb3.setAttribute("value", "extra");
//Etiqueta label
const labelRbMasa3 = document.createElement("label");
labelRbMasa3.setAttribute("id", "labelrb3");
labelRbMasa3.setAttribute("for", "inpRb3");
labelRbMasa3.textContent="Extra";
//Vincular el radio button y label al div
rowRb3.appendChild(inpRb3);
rowRb3.appendChild(labelRbMasa3);

//Contenedor del 4º Radio Button 
const rowRb4 = document.createElement("div");
rowRb4.classList.add("inline-column");
r2c1Opc.appendChild(rowRb4);
//Nodos 
const inpRb4 = document.createElement("input");
inpRb4.setAttribute("type", "radio");
inpRb4.setAttribute("id", "rb4");
inpRb4.setAttribute("value", "extraqueso");
//Etiqueta label
const labelRbMasa4 = document.createElement("label");
labelRbMasa4.setAttribute("id", "labelrb4");
labelRbMasa4.setAttribute("for", "inpRb4");
labelRbMasa4.textContent="Extra con queso";
//Vincular el radio button y label al div
rowRb4.appendChild(inpRb4);
rowRb4.appendChild(labelRbMasa4);


/*--------------------------
--------Radio Button 2------
---------------------------*/

//Div de la 1ª fila de los tamaños de pizz
const row3Opc = document.createElement("div");
row3Opc.classList.add("fieldset-row");
fieldsetOpciones.appendChild(row3Opc);

//Div de la columna donde irán los tamaños de pizza
const r3c1Opc = document.createElement("div");
r3c1Opc.classList.add("fieldset-column");
row3Opc.appendChild(r3c1Opc);

//Nodos de la etiqueta label (tamaño)
const labelRbTamaño = document.createElement("label");
labelRbMasa.textContent = "Elige el tipo de masa";
r2c1Opc.appendChild(labelRbMasa);



//Contenedor del 1er Radio Button 
const rowRb1 = document.createElement("div");
rowRb1.classList.add("inline-column");
r2c1Opc.appendChild(rowRb1);
//Nodos 
const inpRb1 = document.createElement("input");
inpRb1.setAttribute("type", "radio");
inpRb1.setAttribute("id", "rb1");
inpRb1.setAttribute("value", "fina");
//Etiqueta label
const labelRbMasa1 = document.createElement("label");
labelRbMasa1.setAttribute("id", "labelrb1");
labelRbMasa1.setAttribute("for", "inpRb1");
labelRbMasa1.textContent="Fina";
//Vincular el radio button y label al div
rowRb1.appendChild(inpRb1);
rowRb1.appendChild(labelRbMasa1); 

//Contenedor del 2º Radio Button 
const rowRb2 = document.createElement("div");
rowRb2.classList.add("inline-column");
r2c1Opc.appendChild(rowRb2);
//Nodos 
const inpRb2 = document.createElement("input");
inpRb2.setAttribute("type", "radio");
inpRb2.setAttribute("id", "rb2");
inpRb2.setAttribute("value", "normal");
//Etiqueta label
const labelRbMasa2 = document.createElement("label");
labelRbMasa2.setAttribute("id", "labelrb2");
labelRbMasa2.setAttribute("for", "inpRb2");
labelRbMasa2.textContent="Normal";
//Vincular el radio button y label al div
rowRb2.appendChild(inpRb2);
rowRb2.appendChild(labelRbMasa2);

//Contenedor del 3er Radio Button 
const rowRb3 = document.createElement("div");
rowRb3.classList.add("inline-column");
r2c1Opc.appendChild(rowRb3);
//Nodos 
const inpRb3 = document.createElement("input");
inpRb3.setAttribute("type", "radio");
inpRb3.setAttribute("id", "rb3");
inpRb3.setAttribute("value", "extra");
//Etiqueta label
const labelRbMasa3 = document.createElement("label");
labelRbMasa3.setAttribute("id", "labelrb3");
labelRbMasa3.setAttribute("for", "inpRb3");
labelRbMasa3.textContent="Extra";
//Vincular el radio button y label al div
rowRb3.appendChild(inpRb3);
rowRb3.appendChild(labelRbMasa3);

//Contenedor del 4º Radio Button 
const rowRb4 = document.createElement("div");
rowRb4.classList.add("inline-column");
r2c1Opc.appendChild(rowRb4);
//Nodos 
const inpRb4 = document.createElement("input");
inpRb4.setAttribute("type", "radio");
inpRb4.setAttribute("id", "rb4");
inpRb4.setAttribute("value", "extraqueso");
//Etiqueta label
const labelRbMasa4 = document.createElement("label");
labelRbMasa4.setAttribute("id", "labelrb4");
labelRbMasa4.setAttribute("for", "inpRb4");
labelRbMasa4.textContent="Extra con queso";
//Vincular el radio button y label al div
rowRb4.appendChild(inpRb4);
rowRb4.appendChild(labelRbMasa4);


//creacion de la seccion Restaurante 
//leyenda
const leyendaRestaurante = document.createElement("legend");
leyendaRestaurante.textContent = "Sobre el pedido";
fieldsetPedido.appendChild(leyendaRestaurante);

//primera fila (div para formato)
const row1Rest = document.createElement("div");
row1Rest.classList.add("fieldset-row");
fieldsetPedido.appendChild(row1Rest);

//primera columna(div para formato)
const r1c1Rest = document.createElement("div");
r1c1Rest.classList.add("fieldset-column");
row1Rest.appendChild(r1c1Rest);

//seleccionador del restaurante
const labelSelect = document.createElement("label");
labelSelect.setAttribute("for", "restaurante");
labelSelect.textContent = "Elige un restaurante";
r1c1Rest.appendChild(labelSelect);

const selectRestaurante = document.createElement("select");
selectRestaurante.setAttribute("name", "restaurante");
selectRestaurante.setAttribute("id", "restaurante");
selectRestaurante.setAttribute("required", "true");
r1c1Rest.appendChild(selectRestaurante);

//opciones del select
const placeholder = document.createElement("option");
placeholder.setAttribute("value", "");
placeholder.textContent = "Elige un restaurante";

const opcionA = document.createElement("option");
opcionA.setAttribute("value", "res1");
opcionA.textContent = "La casina de Paulina";

const opcionB = document.createElement("option");
opcionB.setAttribute("value", "res2");
opcionB.textContent = "Ixchel's Hollywok";

const opcionC = document.createElement("option");
opcionC.setAttribute("value", "res3");
opcionC.textContent = "PizzalPilpilar";

const opcionD = document.createElement("option");
opcionD.setAttribute("value", "res4");
opcionD.textContent = "La Pizza Pagana de Jana";

selectRestaurante.appendChild(placeholder);
selectRestaurante.appendChild(opcionA);
selectRestaurante.appendChild(opcionB);
selectRestaurante.appendChild(opcionC);
selectRestaurante.appendChild(opcionD);

//div de la columna donde irá la segunda imagen
const r2c2Rest = document.createElement("div");
r2c2Rest.classList.add("fieldset-column");
row1Rest.appendChild(r2c2Rest);
//Nodo de la img
const img2 = document.createElement("img");
img2.setAttribute("alt", "pizzeria");
img2.src = "images/pizzeria.jpg";
img2.width = "300";
//Vincular la img al div
r2c2Rest.appendChild(img2);

//segunda fila (div para formato)
const row2Rest = document.createElement("div");
row2Rest.classList.add("fieldset-row");
fieldsetPedido.appendChild(row2Rest);

//primera columna(div para formato)
const r2c1Rest = document.createElement("div");
r2c1Rest.classList.add("fieldset-column");
r2c1Rest.classList.add("inline-column");
row2Rest.appendChild(r2c1Rest);

//checkbox terminos y condiciones
const terminos = document.createElement("input");
terminos.setAttribute("type", "checkbox");
terminos.setAttribute("name", "recoger");
terminos.setAttribute("id", "recoger");
terminos.setAttribute("value", "s");
terminos.setAttribute("required", "true");
r2c1Rest.appendChild(terminos);

const labelTerminos = document.createElement("label");
labelTerminos.setAttribute("for", "recoger");
labelTerminos.textContent = "Acepto los términos y condiciones";
r2c1Rest.appendChild(labelTerminos);

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

/*
===================================================== validación del formulario ===================================================== 
*/
submit.addEventListener("click", () => {
  const elementosObligatorios = document.querySelectorAll("[required]")
  for (let elemento of elementosObligatorios) {
    elemento.classList.add("validar");
  }
});
