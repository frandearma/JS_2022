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
    //Inicializamos los atributos en el constructor
    constructor(nombre, apellido){
    //Referenciamos los atributos de la clase que se crean en ese momento
    this.nombre = nombre;
    this.apellido = apellido;
    }
}


// Tipo de dato undefined
var x;
console.log(x);

var y = null;
console.log(y);

var z = undefined;
console.log(z);

// Tipo de dato Array (Object)
var autos = ['Fiat','Ford','Torino'];
console.log(autos);
console.log(typeof autos);

// Valores Vacios
var vacio = '';
console.log(vacio);
console.log(typeof vacio);


/*** ¿Como preguntamos el tipo de la variable? ***/
console.log(typeof numero);
console.log(typeof objeto)