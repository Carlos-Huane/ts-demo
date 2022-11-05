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


// FUNCTIONS 

function saludarPersona(nombre: string) {
    console.log(`Hola ${nombre}`);
}
// saludarPersona("Martin")

//valor por defecto 
function despedirPersona(nombre: string = "defecto") {
    console.log(nombre);
}
//despedirPersona() ---> output = "defecto"
//despedirPersona("hola") ---> output = "hola"
function despedidaOpcional(nombre?: string) { // <> function despedidaOpcional(nombre: (string | undefined)){...}
    if(nombre) {
        console.log(`adios ${nombre}`);
    } else {
        console.log("adios");
    }
}
function variosParams(nombre: string, apellidos?:string, edad: number = 18) {
    if(apellidos) {
        console.log(`${nombre} ${apellidos} tiene ${edad}`);
    } else {
        console.log(`${nombre} tiene ${edad}`);
    }
}
// variosParams("Martin") --> "Martin tiene 18 años"
// variosParams("Martin, "San Jose") --> "Martin San Jose tiene 18 años"
// variosParams("Martin", undefined, 30) --> "Martin tiene 30 años"
// function ejemplo(a: string | number){...}

// tambien puedes asignar que tipo de valor debe retornar una función, así : 
// nota: con la función flecha es similar const prueba = (...): string => {...}
function ejemploReturn (nombre: string, apellido: string) : (string | number) {
    return `Mi nombre es ${nombre} + ${apellido}`;
}
//lo que devuelve la función callback es un string, ojo que está definido dentro de ese arrowfunction como parametro
// otra punto es que (cobrar) es una función y puedes llamarla de nuevo dentro de obtenerSalario
function  obtenerSalario(cobrar : () => string) {} 

// // Empleado es un type 
// const cobrarEmpleado = (empleado: Empleado) => {
//     console.log("hola");
    
// }
 
// Async Functions 

async function ejemploAsync(): Promise<string> {
    await console.log("tarea a completar antes de seguir con la secuencia de instrucciones") //Await
    return "completado";
}
// Generators

function * ejemploGenerator() {
    //yield --> para emitir errorres
    let index = 0;
    while(index < 5) {
        //Emitimos un valor incrementado
        yield index++;
    }
}
//Guardamos la función generadora en una variable
let generadora = ejemploGenerator();
//Accedemos a valores emitidos
console.log(generadora.next().value); //0
console.log(generadora.next().value); //1
console.log(generadora.next().value); //2
console.log(generadora.next().value); //3

// Worker
function* watcher(valor: number){
    yield valor; //emitimos el valor inicial
    yield* worker(valor); //llamamos a las emisiones del worker para que emita otros valores
    yield valor + 4;
} 
function* worker(valor: number) {
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;
}
let generatorSaga = watcher(0);
console.log(generatorSaga.next().value); //0 lo ha hecho el watcher
console.log(generatorSaga.next().value); //1 ... worker
console.log(generatorSaga.next().value); //2 ... worker
console.log(generatorSaga.next().value); //3 ... worker
console.log(generatorSaga.next().value); //4 ... watcher

// Persistencia de datos

// 1. localStorage ---> almacena los datos en el navegador
// 2. SesionStorage ---> La diferencia radica en la sesión del navegador. Es decir, los datos
// se persisten en la sesion de navegador
// 3. Cookies ---> Tienen una fecha de caducidad y tambien tienen un ámbito de URL

// localStorage 
/*
    function guardad(): void {
        localStorage.setItem('user', "carlos");
        // guardas en la localstorage un objeto asi : 
        // {user: carlos};
    }
    function leer(): void {
        let nombre = localStorage.get("user");
        // guardas "carlos" en la variable nombre
    }
    function eliminar(): void {
        localStorage.removeItem("user"); 
        // para eliminar la prop user del localStorage
    }
    //nota: tambien hay actualizar y otras más, te lo dejo de tarea
*/
