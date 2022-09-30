/**** CICLO WHILE */
let contador = 0;

while( contador < 3 ){
    console.log(contador);
    contador++;
}
console.log("Fin while");

/**** CICLO DO WHILE */
do{
    console.log(contador);
    contador++;
}while(contador < 3);
console.log("Fin do while");

/**** CICLO  FOR  */

for(let contador = 0; contador < 3 ; contador++ ){
    console.log(contador);
}
console.log("Fin for");


/**** CONTINUE  */
for(let contador = 0; contador <= 10; contador++){
    console.log(contador)
    if( contador<3){
        console.log(contador)
        continue;//ir a la siguiente iteracion
    }
    console.log(contador);
}
/**** FUNCION PARA RANDOM - Ejercicio Moneda */
console.log(Math.floor(Math.random() * 2));