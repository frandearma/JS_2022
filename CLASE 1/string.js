var nombre = 'Juan';
var apellido = 'Perez';
var nombreCompleto = nombre + apellido;
console.log(nombreCompleto);

var nombreCompletoCustom = 'Sr. '+nombreCompleto;
console.log(nombreCompletoCustom);


/*** Las expresiones se evaluan de izquierda a derecha */
var x = nombre + 500;
console.log(x)

var y = 250 + 250 + nombre;
console.log(y);

var z = nombre + (250+250);
console.log(z);

/*** let  */
let auto = "Fiat";

let moto;
moto = "Honda";

const camion = "Volvo";
camion = "Iveco";


/*** Como debe comenzar una variable? */
let a1nombreCompleto;
let _nombreCompleto;
let $nombreCompleto;

/** Palabras reservadas */
let return = 10;
