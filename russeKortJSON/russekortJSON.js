var blaaInp = document.getElementById("blaa")
var rodInp = document.getElementById("rod")
var bilde = document.getElementById("bilde")
var inpFilBilde = document.getElementById("inpFilBilde")
var leggInnBtn = document.getElementById("leggInnBtn")
var tittel = document.getElementById("tittel")
var mal1 = document.getElementById("mal1")
var mal2 = document.getElementById("mal2")
var span = document.getElementById("span")
var bildeB = document.getElementById("bildeB")
var maler = document.getElementById("maler")
var skole = document.getElementById("skolePaaKort")
var navn = document.getElementById("navnPaaKort")
var adr = document.getElementById("adrPaaKort")
var tlf = document.getElementById("tlf")
var sitat1 = document.getElementById("sitat1")
var sitat2 = document.getElementById("sitat2")
var skole2 = document.getElementById("skolePaaKort2")
var navn2 = document.getElementById("navnPaaKort2")
var adr2 = document.getElementById("adrPaaKort2")
var tlf2 = document.getElementById("tlf2")
var sitat12 = document.getElementById("sitat12")
var sitat22 = document.getElementById("sitat22")
//henter alle elementene fra html



//mal2 er blått russekort, og skal være borte når programmet startes. Da ser man bare rødt
mal2.hidden = true

//funksjon for å velge bilde til kortet
function velgFil() {
    var aktueltFilNavn = URL.createObjectURL(inpFilBilde.files[0]);
    bilde.src = aktueltFilNavn;
    bildeB.src = aktueltFilNavn;
}
inpFilBilde.addEventListener("mouseout", velgFil)

//når funksjonen kjøres 
function blaa() {
    tittel.src = "blaaruss.tittel.png"
    mal2.hidden = false
    mal1.hidden = true

}

function rod() {
    tittel.src = "rodruss.tittel.png"
    mal2.hidden = true
    mal1.hidden = false

}


for (let element in russeKort.personer) {
    maler.innerHTML += "<option>" + russeKort.personer[element].navn + "</option>";
}


maler.onchange = function () {
    skole.innerHTML = russeKort.personer[maler.selectedIndex - 1].skole;
    navn.innerHTML = russeKort.personer[maler.selectedIndex - 1].navn;
    adr.innerHTML = russeKort.personer[maler.selectedIndex - 1].adr;
    tlf.innerHTML = russeKort.personer[maler.selectedIndex - 1].tlf;
    sitat1.innerHTML = russeKort.personer[maler.selectedIndex - 1].sitat1;
    sitat2.innerHTML = russeKort.personer[maler.selectedIndex - 1].sitat2;
    skole2.innerHTML = russeKort.personer[maler.selectedIndex - 1].skole;
    navn2.innerHTML = russeKort.personer[maler.selectedIndex - 1].navn;
    adr2.innerHTML = russeKort.personer[maler.selectedIndex - 1].adr;
    tlf2.innerHTML = russeKort.personer[maler.selectedIndex - 1].tlf;
    sitat12.innerHTML = russeKort.personer[maler.selectedIndex - 1].sitat1;
    sitat22.innerHTML = russeKort.personer[maler.selectedIndex - 1].sitat2;
}
