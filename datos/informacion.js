import { Pregunta } from "../modelos/Pregunta.js";
import { datos } from "./datos.js";

export const informacion = datos.map(x => new Pregunta(x.pregunta, x.opciones, x.respuesta, x.categoria));

console.log(informacion);

