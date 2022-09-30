const persona = {
    nombre: 'Juan',
    apellido: 'Perez'
}

function cambiarValorObjeto(p1){
    p1.nombre = 'Francisco';
    p1.apellido = 'De Arma';
}

//PASO POR REFERENCIA
cambiarValorObjeto( persona );
console.log( persona );
