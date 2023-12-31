function devolverNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function conversionNumero(quienJuega, eleccion) {
    if (eleccion == 1) {
        alert(quienJuega + " elije Piedra")
    } else if (eleccion == 2) {
        alert(quienJuega + " elije Papel")
    } else if (eleccion == 3) {
        alert(quienJuega + " elije Tijera")
    }
};

function defineQuienGana(jugador, maquina) {
    if (jugador == maquina) {
        return ("Empate");
    } else if (jugador == 1 & maquina == 3) {
        return ("Gana el jugador");
    } else if (jugador == 2 & maquina == 1) {
        return ("Gana el jugador");
    } else if (jugador == 3 & maquina == 2) {
        return ("Gana el jugador");
    } else {
        return ("Gana la máquina")
    }

};

let ganados = 0;
let perdidos = 0;
while (ganados < 3 && perdidos < 3) {
    let jugador = prompt("Elija 1 para piedra, 2 para papel o 3 para tijera");
    let jugadorResultado = conversionNumero("Jugador", jugador)
    let maquina = devolverNumeroAleatorio(1, 3);
    let maquinaResultado = conversionNumero("La Máquina", maquina);
    let resultadoJuego = defineQuienGana(jugador, maquina);
    alert(resultadoJuego);
    if (resultadoJuego === "Gana el jugador") {
        ganados = ganados + 1;
    } else if (resultadoJuego === "Gana la máquina") {
        perdidos = perdidos + 1;
    }
}

if (ganados == 3) {
    alert("Ganaste esta partida " + ganados + " veces");
} else {
    alert("Perdiste esta partida " + perdidos + " veces");
}