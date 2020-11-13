//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65


var TrainTripKM = Number(prompt("Quanti Chilometri vuoi percorrere?"));
var Age = Number(prompt("How old are you?"));
//costo per KM
var CostKm = 0.21;
var Price = TrainTripKM *CostKm;
if (Age >= 65) {
    Price = Price - (Price * 0.4);
}
else if ( Age <= 17){
    Price = Price - (Price * 0.2);
}


document.getElementById("Price-train").innerHTML = Price;
