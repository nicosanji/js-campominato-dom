"use strict"

/* FUNZIONE -> numero dei box in base alla scelta */
function contenutoBox(diffScelta) {
    // Dichiaro la variabie che cambierà a seconda della scelta
    let numeroBox;

    // Switch: "passo" la scelta nelle 3 opzioni
    switch (parseInt(diffScelta)) {
        case 1:
            numeroBox = 100;
            break;
        case 2:
            numeroBox = 81;
            break;
        case 3:
            numeroBox = 49;
            break;
    }
    // Estrai il valore "numero di box nella griglia"
    return numeroBox;
}


/* FUNZIONE -> genera la griglia e tutti i suoi elementi */
function grigliaFunc(numeroBox, numeroBombe) {

    // Crea la "row" che conterrà tutti i box
    let row = document.createElement("div");
    row.classList.add("row");

    // Inserisci la row nel contenitore griglia
    griglia.append(row);

    // Calcolo per dividere equamente i box nelle righe
    let boxWidth = numeroBox / Math.sqrt(numeroBox);

    // Variabile del singolo box vuota
    let box;

    // Ciclo -> creo i box a seconda della scelta dell'utente e gli do uno "stile"
    for (let i = 1; i <= numeroBox; i++) {

        // Crea l'elemento html "cliccabile"
        box = document.createElement("a");
        // Stile dei box con il calcolo visto in classe (no bootstrap)
        box.style.width = (100 / boxWidth) + "%";
        box.style.height = (100 / boxWidth) + "%";
        box.style.cursor = "pointer";
        // Aggiungo tutte le classi bootstrap che mi servono
        box.classList.add("d-flex", "border", "border-dark", "justify-content-center", "align-items-center", "fw-bold", "text-dark", "text-decoration-none", "user-select-none");

        // Aggiungo il testo -> numero scritto in ogni box = indice/ordine da 1
        box.textContent = i;

        // Inserisci il box nella row del contenitore griglia
        row.append(box);

        box.addEventListener("click", function () {
            active.call(this, numeroBombe);
        });
    }

    return box;
}


/* FUNZIONE -> al click sul BOX togli/metti le classi */
function active(numeroBombe) {

    // THIS -> elemento che ha "scatenato" l'evento al click
    //         cambia e ricambia colore           
    this.classList.toggle("bg-info");
    this.classList.toggle("text-white");

    // Indice per inserire le bombe
    let numeroI = (parseInt(this.textContent));

    // Cosa fare se becco una bomba (condizione sconfitta)
    let Lose = false;
    // Condizione -> se gli "indici" coincidono
    if (numeroBombe.includes(numeroI)) {

        this.classList.add("bg-danger");
        Lose = true;
        alert("BOOM ! Hai beccato una bomba");
    }
}


/* FUNZIONE -> genera un numero random tra i valori minValue e maxValue */
function randomNumber(minValue, maxValue) {
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}


/* FUNZIONE -> genera griglia bombe */
function distribuzioneBombe(numeroBox) {

    // Array -> bombe-vuoto
    let numeroBombe = [];

    // Ciclo while -> "associa" l'indice dei box alle bombe
    while (numeroBombe.length < 16) {

        // assegna un numero random alla bomba tra 1 e il numero dei box creati
        let bomba = randomNumber(1, numeroBox);
        // Includes -> determina se un array include un certo valore tra le sue 
        //             voci (risultato TRUE o FALSE) = bombe non ripetute
        let bombaBoom = numeroBombe.includes(bomba);

        // Aggiungi numero solo se già presente
        if (!bombaBoom) {

            numeroBombe.push(bomba);
        }
    }

    // Console -> mostra in ordine crescente i numeri da associare alle bombe 
    console.log(numeroBombe.sort((a, b) => a - b));

    return numeroBombe;
}