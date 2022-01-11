
export class Jugador {

    /**
     * 
     * @param {string} nombre 
     */

    constructor(nombre){
        this.nombre = nombre;
    }

    static historialDeJuego(){
        Window.localStorage.setItem("nombre",this.nombre);
    }

}

export default Jugador;