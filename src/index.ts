console.log("hola aqui estamos");


// Declaración de variables
// nota: Todo lo que puedas usar en js para declarar una variable es válido, mostraré lo que deberías aplicar en TS

var nombre: string = "Martin";
let numero: number = 23;
console.log(nombre + numero);

var error: boolean;
error = false;
console.log(`There is error? ${error}`)

let a:string, b:boolean, c:number; //Instancia 3 valores sin valor inical;
a = "Typescript";
b = true;
c = 34.4;

// BuildIn Types: number, string, boolean, void, null y undefined

// Tipos más complejos

// Lista de cadenas de texto
let listaTareas: string[] = ["Tarea 1", "Tarea 2"];
// Combinación de tipos en lista
let valores: (string | number | boolean)[] = [false, "hola", true, 56];


// Enumerados
enum Estados {
    "Completado" = "C",
    "Incompleto" = "I",
    "Pendiente" = "P",
}

let estadoTarea: Estados = Estados.Completado; //No puedes hacer --> let EstadoTarea: Estados = "C" X
enum PuestoCarrera {
    "Primero" = 1,
    "Segundo",
    "Tercero"
}
let puestoMaraton: PuestoCarrera = PuestoCarrera.Tercero //3 (si no hubieses puesto nota asigna al primero 0, segundo 1 y tercero 2);

// Interfaces
interface Tarea {
    nombre: string, 
    estado: Estados,
    urgencia: number
}
// Podemos crear variables que sigan la interface Tarea
let tarea1: Tarea = {
    nombre: "Tarea 1",
    estado: Estados.Pendiente,
    urgencia: 10
}

// Types of Typescript
type Product = {
    precio: number,
    nombre: string
}
let coche: Product = {
    nombre : "Audi",
    precio : 0,
}

// Condicionales --> funcionan : operadores ternarios, if, else if, else, tambien 
// Switch
 
switch(tarea1.estado) {
    case Estados.Completado: 
        console.log("The homework is completed")
        break;
        
    case Estados.Incompleto: 
        console.log("The homework is incompleted") // puede ser un return { ...}, pero ya no colocarías break por que return corta switch
        break;
    case Estados.Pendiente:
        console.log("The homework is pendient");
        break;
    default :
        break;
    }

// ** Bucles

let listaTareasNuevas : Tarea[] = [
    {
        nombre: "Tarea 1",
        estado: Estados.Pendiente,
        urgencia: 10
    },
    {
        nombre: "Tarea 2",
        estado: Estados.Incompleto,
        urgencia: 2
    },
    {
        nombre: "Tarea 1",
        estado: Estados.Completado,
        urgencia: 14
    }
]
listaTareasNuevas.forEach((tarea: Tarea, index: number) => {console.log(`${index}-${tarea.nombre}`)});
//todos los métodos de js para iterar son válidos for in, for, map, filter,reduce, etc...
// NOTA: CADA VEZ QUE SE DECLARA UNA VARIABLE DEBES INDICARLE EL TIPO ( NO ES OBLIGATORIO, PERO PARA ESO SIRVE TS);
