/* Hacer un script que pida una frase y 
escriba cuantas veces aparece la letra A*/
let frase = "Hacer un script que pida una frase y escriba cuantas veces aparece la letra A"
frase = frase.toUpperCase();
console.log(typeof frase)
let vocal = "A";
let contA = 0;
for (let i = 0; i <= frase.length; i++) {
    let letra = frase.charAt(i);
    if (letra == vocal) {
        contA++;
    }
}
console.log('A aparece: ' + contA);


/* Hacer un script que pida una frase y 
escriba cuantas veces aparece la letra E*/
let vocalE = "E";
let contE = [];
for (let i = 0; i <= frase.length; i++) {
    if (frase[i] == "A") {
        contE.pop(i);
    }
}
console.log(contE.length)
console.log('E aparece: ' + contE);


/* Hacer un script que teniendo como entrada un array y una variable X,
 multiplique cada elemento del array por la variable X */
const listadoNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let x = 2;
let listadoFinal = [];
for (i = 0; i < listadoNumeros.length; i++) {
    res = listadoNumeros[i] * x;
    listadoFinal.push(res)
}
console.log(listadoFinal)
/*USAMOS EL MAP DE JULIAN */
listadoFinalMap = listadoNumeros.map(listadoNumeros=>listadoNumeros*x);
console.log(listadoFinalMap)

/* METODOS CALCULADORA */
function Suma(num1, num2) {
    return num1 + num2
}

function Resta(num1, num2) {
    return num1 - num2
}

function Division(num1, num2) {
    return num1 / num2
}

function Multiplicacion(num1, num2) {
    return num1 * num2
}

function calcular(a, b, operacion) {
    switch (operacion) {
        case "SUMA":
            resultado = Suma(a, b);
            break;
        case "RESTA":
            resultado = Resta(a, b);
            break;
        case "DIVISION":
            resultado = Division(a, b);
            break;          
        case "MULTIPLICACION":
            resultado = Multiplicacion(a, b);
            break;
        default: 
        resultado = "OPERACION NO DISPONIBLE"
    }
    return resultado
}
console.log(calcular(1,2,"SUMA"))
console.log(calcular(1,2,"RESTA"))
console.log(calcular(1,2,"MULTIPLICACION"))
console.log(calcular(3,2,"RAIZ"))
/* Hacer un script que ingresando un array, me muestre únicamente 
los elementos que son números. 
La salida debe ser un array sin los elementos que son de tipo número.*/
let array = ['Hacer',0,22,23,12,'un',84,'script que'];
let arraySN = [];
for(i=0;i<array.length;i++){
    if(typeof array[i] == 'number'){
        console.log(array[i])
    }else{
        arraySN.push(array[i])
    }
}
console.log(arraySN);
/** USANDO filter */
arrayFilter = array.filter(function filtroString(i){
    return typeof i==='string'
});
console.log(arrayFilter)

