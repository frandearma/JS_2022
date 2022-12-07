'use strict'

try{
    x = 10;
}
catch(error){
    console.log(error)
}
finally{
    console.log('Termina la revision de errores')
}
console.log('Continuamos')


try{
   let x = 10;
   throw 'Error: No debe ser 10'
}
catch(error){
    console.log(error)
}
finally{
    console.log('Termina la revision de errores')
}
console.log('Continuamos')