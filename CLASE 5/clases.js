class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido; //SIMILAR A COMO TRABAJAMOS CON OBJETOS ,
                                    //THIS. NOMBRE HACE REFERENCIA A UNA NUEVA PROPIEDAD, 
                                    //PARA ASIGNARLE EL VALOR HACEMOS IGUAL AL PARAMETRO QUE RECIBIMOS 
    }

    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre
    }
    
    nombreCompleto(){
        return this._nombre+' '+this._apellido;
    }
}

/* PARA CREAR UN OBJETO USAMOS LA PALABRA RESERVADA NEW y el 
nombre de la clase (esto reserva espacio de memoria para crear un nhjuevo objeto) el cual se crea a partir de
esa plantilla que mencionabamos, es decir estamos instanciando a la clase
*/
let persona1 = new Persona('Francisco','De Arma');
console.log(persona1)

let persona2 = new Persona('Juan','Perez');
console.log(persona1)

console.log(persona1.nombre);
persona1.nombre = 'Juan Carlos';
console.log(persona1.nombre);


class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre,apellido);//LLAMAR AL CONSTRUCTOR DE LA CLASE PADRE
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //Sobreescritura -> Tenemos que usar el mismo nombre y mismos parametros
        nombreCompleto(){
            return super.nombreCompleto()+' Dpto: '+this._departamento;
        }
}

let empleado1 = new Empleado('Juan','Perez','Sistemas');
console.log(empleado1)
console.log(empleado1.nombreCompleto())