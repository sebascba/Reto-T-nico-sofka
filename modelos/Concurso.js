//@ts-check
import {Pregunta} from "./Pregunta.js"

export class Concurso{

    ronda = 1
    puntuacion = 0
    indexAleatorio = Math.floor(Math.random()*5);

    
    /**
     * @param {Pregunta[]} informacion
     */
    constructor(informacion){
        this.informacion = informacion;
    }

    finalizar(){
        if(this.ronda == 6){

            alert(`Felicidades ganaste el juego.
            conseguiste el mayor puntaje: ${this.puntuacion}.
            Acepta para volver a intentar diferentes preguntas`)
            this.indexAleatorio = Math.floor(Math.random()*5);
            this.ronda = 1
            this.puntuacion = 0 
        }
    }
    

    /**
     * @param {string} opcion
     */
    avanceDeRonda(opcion){
        console.log(opcion)
        if(this.seleccionarPorCategoria().opcionCorrecta(opcion)){
            this.ronda++
            if(this.ronda == 1){
                
            }else if(this.ronda ==2){
                this.puntuacion += 1000
                this.indexAleatorio = Math.floor(Math.random()*5);
            }else if(this.ronda ==3){
                this.puntuacion += 1500
                this.indexAleatorio = Math.floor(Math.random()*5);
            }else if(this.ronda == 4){
                this.puntuacion += 2000
                this.indexAleatorio = Math.floor(Math.random()*5);
            }else if(this.ronda ==5){
                this.puntuacion += 2500
                this.indexAleatorio = Math.floor(Math.random()*5);
            }else if(this.ronda ==6){
                this.puntuacion += 3500;
            }
            var numb = confirm(`respuesta correcta, su puntaje actual es ${this.puntuacion}. ¿Desea continuar?`)  
            if(numb == false){
                alert(`ha terminado, su puntaje ha sido de ${this.puntuacion}`)
                this.ronda = 1
                this.puntuacion = 0
            }
        }else{
            this.ronda = 1
            this.puntuacion = 0 
            alert(`Perdió, su puntaje final es ${this.puntuacion}, vuelva a intentar`)
        }
        console.log(this.ronda)
        console.log(this.puntuacion)
    }

    seleccionarPorCategoria(){
        const nivel = this.informacion.filter((x) => x.categoria == this.ronda);
        return nivel[this.indexAleatorio];
    }
}

