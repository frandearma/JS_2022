const listadoNumero = [0,1,2,3,4,5,6,7,8,9,10];
const pares = [];
const impares = [];

for(let i = 0; i < listadoNumero.length; i++){
    //EVALUAR UNA CONDICION PARA LLENAR LOS ARRAYS
    console.log(listadoNumero[i])
    if(listadoNumero[i] % 2 == 0){
         // ES PAR -> LLENARMOS ARRAY PAR
            pares.push(listadoNumero[i]);
    }else{
        // ES IMPAR -> LLENARMOS ARRAY IMPAR
        impares.push(listadoNumero[i]);
    }
}
console.log(pares);
console.log(impares);