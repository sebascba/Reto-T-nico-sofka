export class Pregunta {
    /**
     * 
     * @param {string} pregunta esta es la pregunta a responder
     * @param {string[]} opciones esta son las dintintas posibles repuestas
     * @param {string} respuesta esta es la respuesta correcta
     * @param {int} categoria este es el nivel de dificultad
     */
    constructor(pregunta, opciones, respuesta, categoria){
        this.pregunta = pregunta;
        this.opciones = opciones;
        this.respuesta = respuesta;
        this.categoria = categoria;
    }
    /**
     * 
     * @param {string} opcion 
     * @returns {boolean}
     */
    opcionCorrecta(opcion){
        return opcion === this.respuesta;
    }

}