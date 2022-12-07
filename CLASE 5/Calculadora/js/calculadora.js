      /**** DEFINIMOS VARIABLES A UTILIZAR ****/
      let expresionCalcular, total;
      /***** INICIALIZAMOS LA VARIABLES EN 0 *******/
      expresionCalcular = '';
      total = 0;
      /*** FUNCION CLEAR ****/
      function limpiarPantalla(){
      	document.getElementById('total').value = "";
        expresionCalcular = '';
      }
      /**** FUNCION CALCULAR *****/
      function calcular(valor){
        console.log(valor)
        expresionCalcular += valor;
        document.getElementById('total').value = expresionCalcular;
      }
       /**** FUNCION MOSTAR RESULTADO TOTAL *****/
       function mostrarResultado(){
          total = eval(expresionCalcular)
          if(total){
            document.getElementById('total').value = total;
          }else{
            total = '';
            // COMPLETAR: EL TOTAL DE LA PANTALLA DEBE ESTAR VACIO, ASIGNAR ESE VALOR A LA VARIABLE
            document.getElementById('total').value = 'INGRESE DATOS';
          }
          expresionCalcular = total;
      }