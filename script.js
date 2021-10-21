/*
1) L’utente indica un livello di difficoltà in base al quale viene generata una
   griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli 
   compresi in un range:
   - con difficoltà 1 => tra 1 e 100
   - con difficoltà 2 => tra 1 e 81
   - con difficoltà 3 => tra 1 e 49
2) Il computer deve generare 16 numeri casuali (le bombe) tenendo conto della 
   difficoltà scelta:
   - difficolta 1 = tra 1 e 100
   - difficoltà 2 = tra 1 e 81
   - difficoltà 3 = tra 1 e 49
   NB: I numeri nella lista delle bombe non possono essere duplicati.
3) In seguito l’utente clicca su ogni cella e se il numero è presente nella lista 
   dei numeri generati
   - abbiamo calpestato una bomba e la cella si colora di rosso e la partita termina
   - altrimenti la cella cliccata si colora di azzurro e l’utente può continuare
4) La partita termina quando il giocatore clicca su una bomba o raggiunge il numero 
   massimo possibile di numeri consentiti.
5) Al termine della partita il software deve scoprire tutte le bombe e comunicare il
   punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
*/

"use strict";

// Prendo l'elemento html -> select (easy, medium, hard)
const difficolta = document.getElementById("difficolta");
console.log(difficolta);
// Prendo l'elemento html -> button
const iniziaGioco = document.getElementById("inizia-gioco");
console.log(iniziaGioco);
// Prendo l'elemento html -> container griglia
const griglia = document.getElementById("griglia");
console.log(griglia);

// EVENTO AL CLICK SU "GIOCA" distribuzione box e bombe
iniziaGioco.addEventListener("click", function () {
    // Svuota griglia
    griglia.innerHTML = "";
    
    iniziaGioco.textContent = "Riprova";

    // Che difficoltà è stata scelta ?
    const diffScelta = difficolta.value;

    // Con la funzione contenutoBox -> numero di box nella griglia creata
    let numeroBox = contenutoBox(diffScelta);

    console.log(`Il numero di box creati per la difficoltà ${diffScelta} è ${numeroBox}`);

    let numeroBombe = distribuzioneBombe(numeroBox);
    // Con la funzione grigliaFunc -> griglia regolare con box quadrati 
    grigliaFunc(numeroBox, numeroBombe);

});











