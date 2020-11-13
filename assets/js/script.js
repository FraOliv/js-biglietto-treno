//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65


var TrainTripKM = Number(prompt("Quanti Chilometri vuoi percorrere?"));
if (isNaN (TrainTripKM) )
alert("Sei Nabbo");
var Age = Number(prompt("How old are you?"));
if (isNaN (Age) )
alert("Sei Nabbo");
//costo per KM
var CostKm = 0.21;
var StandardPrice = TrainTripKM *CostKm;
var UnderDiscount = StandardPrice* 0.2;
var OverDiscount = StandardPrice * 0.6;
var OverPrice = StandardPrice - OverDiscount;
var UnderPrice = StandardPrice - UnderDiscount;
var FinalPrice = StandardPrice;
if (Age >= 65) {
FinalPrice = StandardPrice - OverDiscount;
if (Age <= 17) {
    FinalPrice =  StandardPrice - UnderDiscount;
}
}

document.getElementById("Price-train").innerHTML = FinalPrice;
