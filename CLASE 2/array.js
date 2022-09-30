//let autos = new Array('BMW','Mercedes Benz','Volvo');
const autos = ['BMW','Mercedes Benz','Volvo'];
console.log(autos);

/******* IDENTIFICAR ARRAY */
console.log( Array.isArray(autos) );

console.log( autos instanceof Array);

console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(i + ' : ' + autos[i] );
}

/***** MODIFICAR ARRAY */
autos[1] = 'Fiat';
console.log(autos[1]);
/****** AGREGAR ELEMENTO AL FINAL */
autos.push('Audi');
console.log(autos);
/****** QUITAR ULTIMO ELEMENTO */
autos.pop();
console.log(autos);
/****** AGREGAR ELEMENTO AL INICIO */
autos.unshift('Audi','Ford');
console.log(autos);