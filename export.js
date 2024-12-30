// Una vez que empiezas a tranajar en proyectos grandes vas a necesitar trabajar 
// con muchos archivos y vas a necesitar una manera de importar funciones y objetos
// o variables de un archivo a otro, tambien vas a necesitar importar diferentes librerias.

// Ahora queremos utilizar todos estos elementos en otro archivo y por eso vamos a utilizar la palabra export
// y esto dice que vamos a exportar cada uno de estos elementos

export function sumar(a, b) {
    return a + b;
}

export const PI = 3.14;

export class Servicio {
    tres = 3;

    restarTres(num) {
        return num - this.tres;
    }
}

// Unos de estos elementos represente totalmente si es que quiero importar todo el archivo

export default Servicio;