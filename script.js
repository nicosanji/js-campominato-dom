/*
1) L’utente indica un livello di difficolta in base al quale viene 
    generata una griglia di gioco quadrata, in cui ogni cella contiene 
    un numero tra quelli compresi in un range:
    - con difficolta 1 => tra 1 e 100
    - con difficolta 2 => tra 1 e 81
    - con difficolta 3 => tra 1 e 49
2) Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/


// Prendo l'elemento html -> select (easy, medium, hard)
const difficolta = document.getElementById("difficolta");
console.log(difficolta);
// Prendo l'elemento html -> button
const iniziaGioco = document.getElementById("inizia-gioco");
console.log(iniziaGioco);
// Prendo l'elemento html -> container griglia
const griglia = document.getElementById("griglia");
console.log(griglia);


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


/* CLICK -> "al click" su PLAY devi fare ... */
iniziaGioco.addEventListener("click", function () {
    // Svuota griglia
    griglia.innerHTML = "";

    // Che difficoltà è stata scelta ?
    const diffScelta = difficolta.value;

    // Con la funzione contenutoBox -> numero di box nella griglia creata
    numeroBox = contenutoBox(diffScelta);
    console.log(`Il numero di box creati per la difficoltà ${diffScelta} è ${numeroBox}`);

    // Con la funzione grigliaFunc -> griglia regolare con box quadrati 
    grigliaFunc(numeroBox);
});


/* FUNZIONE -> genera la griglia e tutti i suoi elementi */
function grigliaFunc(numeroBox) {

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

        // Aggiungi evento che modifica lo stile al click
        box.addEventListener("click", active);
    }
}


/* FUNZIONE -> al click sul BOX togli/metti le classi */
function active() {
    // THIS -> elemento che ha "scatenato" l'evento al click
    this.classList.toggle("active");
    this.classList.toggle("text-white");
}









