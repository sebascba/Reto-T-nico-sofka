import {informacion} from "./datos/informacion.js";
import { Concurso } from "./modelos/Concurso.js";
import { Interfaz } from "./modelos/Interfaz.js";
const renderizar = (concurso, interfaz) => {
    concurso.finalizar();
    interfaz.mostrarHistorico();
    interfaz.mostrarAv(concurso.ronda, concurso.puntuacion)
    interfaz.mostrarP(concurso.seleccionarPorCategoria().pregunta);
    interfaz.mostrarOp(concurso.seleccionarPorCategoria().opciones, (opActual) => {
        concurso.avanceDeRonda(opActual);
        renderizar(concurso, interfaz);
        });
}
function main(){

    const concurso = new Concurso(informacion);
    const interfaz = new Interfaz();
    renderizar(concurso, interfaz);
    
}
main();
