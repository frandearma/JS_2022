let a = 3, b = 2;
let z = a + b;
console.log("Resultado de la suma: " + z );

z = a - b;
console.log("Resultado de la resta: " + z);

z = a * b;
console.log( "Resultado de la mult:" + z);

z = a / b;
console.log( "Resultado de la division:" + z);

z = a % b;//residuo de la division
console.log( "Resultado de operacion modulo (residuo):" + z);

z = a ** b;
console.log( "Resultado de operador exponente:" + z);



a = 3, b = 2;
z = a + b;

//Incremento
//Pre-incremento (el operador ++ antes de la variable)
z = ++a;
console.log(a);
console.log(z);

//Post-incremento (el operador ++ despues de la variable)
z = b++;
console.log(b);
console.log(z);

//Decremento
//Predecremento
z = --a;
console.log(a);
console.log(z);

//Postdecremento
z = b--;
console.log(b);
console.log(z);