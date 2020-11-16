//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65


var TrainTripKM = Number(prompt("Benvenuto da Trenitalia quanti km devi percorrere?"));
if (isNaN (TrainTripKM) )
alert("Sei Nabbo");
var Age = Number(prompt("Quanti anni hai?"));
if (isNaN (Age) )
alert("Sei Nabbo");
//costo per KM
var CostKm = 0.21;
//prezzo senza sconto
var StandardPrice = TrainTripKM *CostKm;
if (Age >= 65) {
    StandardPrice = StandardPrice - (StandardPrice * 0.4);
}
else if ( Age <= 17){
    StandardPrice = StandardPrice - (StandardPrice * 0.2);
}

document.getElementById("Price-train").innerHTML = "Ciao, visto che hai " + Age + " anni il prezzo finale è " + StandardPrice + " $";
