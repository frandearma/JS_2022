funcionSuma(1, 1);

//Declaración de la función
function funcionSuma(num1, num2){
    /*
        BLOQUE DE CODIGO REEUTILIZABLE!!
    */
    suma = num1+num2
    console.log("Suma: " + suma);   
}

//Llamando a la función
funcionSuma(2, 3);

/**** RETURN *******/

//Declaración de la función
function funcionSumar(a, b){
    suma = a + b;
    return suma
}
//Llamando a la función
let resultado = funcionSumar(1, 4);
console.log(resultado);
/**** FUNCION TIPO EXPRESION *******/
//Declaración Función de tipo Expresión
let sumar = function (a, b){return a + b};
resultado = sumar(1, 2);
console.log(resultado);

/***** SELF INVOKING *****/
(function (a, b){
    console.log('Ejecutando self invoking: ' + (a + b));
})(1,2);

/*****  FUNCION FLECHA ***********/
const restarFuncionTipoFlecha = (a, b) => a - b;
resultado = restarFuncionTipoFlecha(32, 5);
console.log(resultado);

/****** ARGUMENTOS Y PARAMETROS  */
//Declaración Función de tipo Expresión
let multiplicar = function (a = 2, b = 3){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a * b * arguments[2];
};
resultado = multiplicar(2, 3, 5);
console.log(resultado);


/*******   ACTIVIDAD SUMAR TODO */
let res = sumarTodo(5, 4, 13, 10, 9, 10, 11,23);
console.log( res );

function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i]; // suma = suma + arguments[i]
    }
    return suma;
}