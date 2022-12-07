//EJERCICIO 1
let numero = 10;

function multiplicarValor(x){
    x = numero*numero;
    console.log(x)
}

//EJERCICIO 2
const moto = {
    marca: 'Honda',
    modelo: 'Civic'
}

function crearMoto(moto){
    moto.marca = 'Honda';
    moto.modelo = 'Wave';
    moto.fechaFabricacion = '2022';
    moto.KM = 100000;
    moto.estado = true;
}

//PASO POR REFERENCIA
crearMoto( moto );
console.log( moto );
console.log( typeof moto.estado );