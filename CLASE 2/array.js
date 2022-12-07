//let autos = new Array('BMW','Mercedes Benz','Volvo');
const alimentos = ['Frutilla',''];
console.log(autos);

/******* IDENTIFICAR ARRAY */
console.log( Array.isArray(autos) );

console.log( autos instanceof Array);
/*** ACCEDER A LOS ELEMENTOS DE UN ARRAY */
console.log(autos[0]);
console.log(autos[1]);
/*** ITERAR ARRAY CON UN CICLO FOR */
for(let i = 0; i < autos.length; i++){
    console.log(i + ' : ' + autos[i] );
}

/***** MODIFICAR ARRAY */
autos[0] = 'Toyota';
console.log(autos);
/****** AGREGAR ELEMENTO AL FINAL */
console.log(autos);
autos.push('Audi','Chevy');
console.log(autos);
/****** QUITAR ULTIMO ELEMENTO */
console.log(autos);
autos.pop();
console.log(autos);
/****** AGREGAR ELEMENTO AL INICIO */
console.log(autos);
autos.unshift('Audi','Ford');
console.log(autos);