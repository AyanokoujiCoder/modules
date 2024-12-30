// Voy a indicar que quiero importar desde un archivo "./" 

import { sumar, PI, Servicio } from './export.js';

let resultado = sumar(1,2);
console.log(resultado);
console.log(PI);
const servicio = new Servicio();
console.log(servicio.restarTres(PI));

// Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
// (Use `node --trace-warnings ...` to show where the warning was created)
// c:\Users\LENOVO\Desktop\Academia-X\JavaScript\Modulos\import.js:3
// import { sumar } from './export.js';

// Abrimos terminaal y ejecutamos:

// npm init

// Damos puro Enter

// Luego vamos a package.json y nos pide que incluyamos type: "module"

// Finalmente corremos aqui el codigo

// Selecciona todo lo que sera exportado (Aparte)
// import * as todo from './export.js';