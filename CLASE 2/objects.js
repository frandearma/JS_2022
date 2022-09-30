let x = 10;
console.log(x.length);

let moto = {
    marca: 'Honda',
    modelo: 'Biz',
    km: 10000,
    año: 2008,
    vidaUtil: function(){
        tiempo = 2022 - this.año;
        return Math.floor(this.km/tiempo,)+' KM';
    }
}
console.log(moto.vidaUtil());
console.log(moto.marca);
console.log(moto.modelo);
console.log(moto.km);

/***** CREAR OBJETO DE OTRA FORMA */
let auto = new Object();
auto.marca = 'Fiat';
auto.modelo = '127';
auto.km = 5544342;
console.log(auto);
console.log( auto.km );

/* OTRA FORMA DE ACCEDER ES ITERANDO ****/
for( atributo in auto){
    console.log( atributo );
    console.log( auto[atributo]);
}
/****** AGREGAR PROPIEDAD DEL OBJETO */
auto.nombre = 'Auto Fantasma';
console.log(auto.nombre);
/****** RENOMBRAR PROPIEDAD DEL OBJETO */
auto.nombre = 'Auto Cazafantasmas';
console.log(auto.nombre);
/****** ELIMINAR PROPIEDAD DEL OBJETO */
delete auto.nombre;
console.log(auto.nombre);

/*** IMPRIMIR O MOSTRAR UN OBJETO */
//Concatenar cada valor de cada propiedad
console.log( auto.marca + ' ' + auto.modelo);
//for in
for( atributo in auto){
    console.log( auto[atributo]);
}
// Array
let autoArray = Object.values( auto );
console.log( autoArray );
// JSON.stringfy
let autoString = JSON.stringify( auto );
console.log( autoString );

/**** METODO GET */
let camion = {
    marca : 'Iveco',
    modelo : 'Stralis 360',
    km : 124152,
    get queCamionEs(){
        return this.marca + ' ' + this.modelo;
    }
}
console.log(camion);
console.log(camion.queCamionEs)
/**** METODO SET */
let avion = {
    marca : 'Boeing',
    modelo : '747',
    capacidad : 467,
    get cantidadPasajeros(){
        return this.capacidad + ' pasajeros.';
    },
    set capacidadAvion(cantidadPersonas){
        this.capacidad = cantidadPersonas;
    },
}
console.log(avion);
console.log(avion.cantidadPasajeros)
avion.capacidadAvion = 560;
console.log(avion.cantidadPasajeros)
console.log(avion.capacidad);

/****** CONSTRUCTOR DE OBJETOS */
//Funcion constructor de objetos de tipo Vehiculo
function Vehiculo(marca, modelo, capacidad){
    this.marca = marca;
    this.modelo = modelo;
    this.capacidad = capacidad;
    this.capacidadViaje = function(cantPasajeros){
        disponibilidad = this.capacidad-cantPasajeros;
        if(disponibilidad>=0){
            return true;
        }else{
            return false;
        }
    }
}

let motoHonda = new Vehiculo('Honda', 'CB 250', 2);
console.log( motoHonda );

let autoHonda = new Vehiculo('Honda', 'Civic', 5);
console.log( autoHonda );

// SE ROMPIO UN CINTURON, ACTUALIZAMOS EL OBJETO
autoHonda.capacidad = 4;

console.log( autoHonda );
console.log( motoHonda );
//FUNCION PARA VER SI PODEMOS VIAJAR TODOS
console.log(autoHonda.capacidadViaje(3));

/****** PROTOTYPE */
//Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

Persona.prototype.tel = '3472000000'; //VALOR DEFAULT

let profesor = new Persona('Francisco', 'De Arma', 'frandearma@gmail.com');
profesor.tel = '3472506478';
console.log( profesor );

let estudiante = new Persona('Federico', 'Perez', 'fperez@mail.com');
estudiante.tel = '3472984523';
console.log( estudiante.tel );


/****** METODO CALL */
//Funcion constructor de objetos de tipo Animal
function Perro(tipo, color, peso, raza){
    this.tipo = tipo;
    this.color = color;
    this.peso = peso;
    this.raza = raza;
    this.tipoAnimal = function(nombreAnimal){
        return 'Soy '+nombreAnimal+' un '+ this.tipo + ' ' + this.raza + ' de color '+this.color;
    }
}
let perroLabrador = new Perro('Perro', 'Negro', '30 Kg', 'Labrador');
console.log(perroLabrador.tipoAnimal('Roco'));
let gatoSiames = {
    tipo : 'Gato',
    color : 'Blanco',
    peso : '14 Kg',
    raza : 'Siames',
}
console.log(gatoSiames);
console.log(perroLabrador.tipoAnimal.call(gatoSiames,'Galf'));
/**** METDO APPLY */
let gatoPersa = {
    tipo : 'Gato',
    color : 'Naranja',
    peso : '34 Kg',
    raza : 'Persa',
}
let arrayGarfield = ['Garfield']
console.log(perroLabrador.tipoAnimal.apply(gatoPersa,arrayGarfield));
