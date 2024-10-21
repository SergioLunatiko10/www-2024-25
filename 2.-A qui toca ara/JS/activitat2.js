let LlistatJugadors = [] ;


function AfegirJugador() {

    let jugador = document.getElementById("camp_nom").value;
    document.getElementById("jugadors").innerHTML += `${jugador} <br>`;

    LlistatJugadors.push(jugador);

}

function NextPlayer () {
    // MOSTRA EN PANTALLA JUGAOR ACTUAL
    document.getElementById("jugador_actual").innerHTML = LlistatJugadors[0] ;
    // 
    let jugador_actual = LlistatJugadors.shift();
    // 
    LlistatJugadors.push()
    // 4. ESBORRAR LA PANTALLA I 
    document.getElementById("jugadors").innerHTML = " ";

    // recorrem el vector i el mostrem en pantalla
    // element per element


    for (let i=0;i<LlistatJugadors.length;i++) {
        document.getElementById("jugadors").innerHTML += 
        `${LlistatJugadors[i]}<br>;
    }
}

