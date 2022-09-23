/****** EJEMPLOS DE TIPOS DE DATOS *********/

// Tipo de dato String
var nombre = "Juan Perez";
console.log(nombre);

// Tipo de dato Numerico
var numero = 500;
console.log(numero);
console.log(typeof numero);
// Tipo de dato
var numero = 500.23;
console.log(numero);
console.log(typeof numero);

// Tipo de dato Boolean
var numero = true;
console.log(numero);
console.log(typeof numero);

// Tipo de dato Objeto
var objeto = {
    nombre : "Juan",
    apellido : "Perez",
    codArea: 3472,
    numTelefono: 508923
}
// Salida de consola del objeto
console.log(objeto);
// Salida de consola de la propiedad Nombre del objeto
console.log(objeto.nombre);
// Salida de consola de la propiedad codArea + numTelefono del objeto
console.log(objeto.codArea+'-'+objeto.numTelefono)

// Tipo de dato Function
function miFuncion(){
    /* Codigo de mi funcion */
}
console.log(miFuncion)
console.log(typeof miFuncion);

// Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);


// Tipo de dato Clase
class Persona{
    
}

/*** ¿Como preguntamos el tipo de la variable? ***/
console.log(typeof numero);
console.log(typeof objeto)