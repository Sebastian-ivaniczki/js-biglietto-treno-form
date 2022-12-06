/*
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65. 
*/


//1- targhetizzo prendo gli elementi in pagina
const button = document.getElementById("button");

const finalPrice = document.getElementById("target");

const tripPrice = document.getElementById("trip-price");

const passN = document.getElementById("pasenger-name");

const passenger = document.getElementById("pasenger")

const cancel = document.getElementById("cancel")

//2- chido all'utente il numero di chilometri che deve percorrere 

const kms = document.getElementById("kms");
//console.log(tripKm)


// chiedo l'eta del passegero

const age = document.getElementById("age");

// in base ai dati forniti calcolo il prezzo del biglietto  con una funzione
button.addEventListener('click', function() {
    //prendo i value dalla pagina
    const tripKm = parseInt(kms.value)
    const pasengerAge = parseInt(age.value)
    const pasengerName = passN.value.trim()
    
    //calcolo il prezzo del viaggio sapendo che costa (0.21€) al chilometro
    const pricePerKm = 0.21;
    
    let tripCost =  tripKm * pricePerKm;
    tripCost = tripCost.toFixed(2)
    //console.log(tripCost)
    
    //validation control
    
    let isValid = true
    
    if (isNaN(tripKm) || isNaN(pasengerAge) ) {
        isValid = false
    }
    
    
    
    let ageDiscount
    let  discontedPrice = tripCost;
    
    if (isValid === true){
        
        let tripCost =  tripKm * pricePerKm;
    tripCost = tripCost.toFixed(2)
    //se è minorenne aplico uno sconto del 20%
    if (pasengerAge <= 18){
        ageDiscount = (tripCost * 20) / 100; 
        discontedPrice = tripCost - ageDiscount;
        discontedPrice = discontedPrice.toFixed(2)
    }
    
    //se ha piu di 65 anni aplico uno sconto del 40%
    if (pasengerAge >= 65){
        ageDiscount = (tripCost * 40) / 100; 
        discontedPrice = tripCost - ageDiscount;
        discontedPrice = discontedPrice.toFixed(2)
    }
    
    tripPrice.innerText = `${discontedPrice} €`
    passenger.innerText = pasengerName
   
}else {
    finalPrice.innerText ="devi dichiarare l'età ed i chilometri da percorrere"
}

});

cancel.addEventListener('click' , function () {

    history.go(0)
});



