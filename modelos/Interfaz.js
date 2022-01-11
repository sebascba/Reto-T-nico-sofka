export class Interfaz {
    /**
     * 
     * @param {string} texto 
     */
    mostrarP(texto) {
        const tituloP = document.getElementById("preguntas");
        tituloP.innerHTML = texto;
    }
    /**
     * 
     * @param {string[]} opciones 
     */
    mostrarOp(opciones, callback) {
        const mostrarOp = document.getElementById('opciones');
        mostrarOp.innerHTML = "";
        for (let i = 0; opciones.length > i; i++) {
            const button = document.createElement("button");
            button.className = 'button'
            button.innerText = opciones[i];
            mostrarOp.append(button);
            button.addEventListener('click', () => callback(opciones[i]))
        }
    }
    mostrarAv(actual, puntaje) {
        const avance = document.getElementById('puntos');
        avance.innerHTML = `Nivel ${actual} Puntaje actual ${puntaje}`
    }

    mostrarHistorico() {
        const interHistorico = document.getElementById('historico');
        let array = []
        let historico = localStorage.getItem("historico")
        interHistorico.innerHTML = "";
        if (historico) {
            array = JSON.parse(historico);
            for (let i = 0; array.length > i; i++) {
                let li = document.createElement("li");
                li.appendChild(document.createTextNode(`${array[i]}`));
                interHistorico.appendChild(li)
            }
        }
    }
}