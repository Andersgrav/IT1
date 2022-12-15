/*Lager en array for å putte inn verdier */
var seksjonArray = [
    document.getElementsByClassName("rad1"),
    document.getElementsByClassName("rad2"),
    document.getElementsByClassName("rad3"),
    document.getElementsByClassName("rad4"),
    document.getElementsByClassName("rad5"),
    document.getElementsByClassName("rad6"),
    document.getElementsByClassName("rad7"),
    document.getElementsByClassName("rad8"),
    document.getElementsByClassName("rad9"),
    document.getElementsByClassName("rad10"),
    document.getElementsByClassName("rad11"),
    document.getElementsByClassName("rad12"),
    document.getElementsByClassName("rad13"),
    document.getElementsByClassName("rad14"),
    document.getElementsByClassName("rad15"),
    document.getElementsByClassName("rad16"),
    document.getElementsByClassName("rad17"),
    document.getElementsByClassName("rad18"),
]

var terningen = document.getElementById("terningen");
/*Lager tall fra 1-6*/
function terningKast() {
    return Math.floor((Math.random() * 6) + 1);
}
var terningSvar = document.getElementsByClassName("terningSvar");
/*Bruker tall fra terningKast() og putter det inn i HTML*/
function kast() {

    for (let i = 0; i < terningSvar.length; i++) {
        if (terningSvar[i].style.backgroundColor != "green") {
            terningSvar[i].innerHTML = terningKast();
            terningSvar[i].src = "terning" + terningKast() + ".png"
        }
    }
}
terningen.onclick = kast;

for (let i = 0; i < terningSvar.length; i++)
    terningSvar[i].style.backgroundColor = "black";

/*Gjør terningene grønne om de trykkes på*/
function gronn(terningNr) {
    if (terningSvar[terningNr - 1].style.backgroundColor == "black") {
        terningSvar[terningNr - 1].style.backgroundColor = "green";
    }

    else if (terningSvar[terningNr - 1].style.backgroundColor == "green") {
        terningSvar[terningNr - 1].style.backgroundColor = "black";
    }
}

/*Lagrer resultatet av de grønne tallene, og printer ut der man trykker. Det går bare an å sette enere på enere osv.
Kun summen av enkelt tallene (ikke hus, yatzy osv)*/
function lagre(radNummer, kolonneNummer) {
    var resultat = 0;
    var antallGronne = 0;
    
    for (let i = 0; i < terningSvar.length; i++) {
        if (terningSvar[i].style.backgroundColor == "green") {
            resultat += Number(terningSvar[i].src[46]);
            antallGronne++;
        alert(terningSvar[i].src[46])
        }
        if (resultat / antallGronne == radNummer) {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = resultat;
        }
        else {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = 0;
        }
        terningSvar[i].style.backgroundColor = "black";
    }
}
//Lager en fuksjon som spør om hvem som skal være med å spille og skriver ut dette med de 2 første bokstavene i navnet.
var deltakere = document.getElementsByClassName("deltaker")
function spillere() {
    for (let i = 0; i < deltakere.length; i++) {
        deltakere[i].innerHTML = prompt("Navn på spiller").substring(0, 2)
    }
}

/*Summerer tallene over og finner ut om det blir bonus eller ikke*/
function summer(kolonneNummer) {
    var summen = 0;
    for (let i = 0; i <= 5; i++) {
        summen += Number(seksjonArray[i][kolonneNummer - 1].innerHTML);

        seksjonArray[6][kolonneNummer - 1].innerHTML = summen;
    }
    if (summen >= 63) {
        seksjonArray[7][kolonneNummer - 1].innerHTML = 50;
    }
    else {
        seksjonArray[7][kolonneNummer - 1].innerHTML = 0;
    }

}

//her kommer fuksjonene til de forskjellige summene, mye det samme, men kravene i if-løkken endres etter hva det skal bli slik at man ikke kan jukse
function par1(radNummer, kolonneNummer) {
    var resultat = 0;

    for (let i = 0; i < terningSvar.length; i++) {
        if (terningSvar[i].style.backgroundColor == "green") {
            resultat += Number(terningSvar[i].src[46]);

        }
        
        if (resultat / 2 == Number(terningSvar[i].src[46]) || resultat == 0) {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = resultat;
        }
        else {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = 0

        }
        terningSvar[i].style.backgroundColor = "black";
    }
    
}

//her bruker jeg en array for å sjekke om noen jukser
//største tallet i arrayen + minste vil bli resultatet delt på 2
function par2(radNummer, kolonneNummer) {
    var resultat = 0;
    parArray = []
    for (let i = 0; i < terningSvar.length; i++) {
        if (terningSvar[i].style.backgroundColor == "green") {
            resultat += Number(terningSvar[i].src[46]);
            parArray.unshift(Number(terningSvar[i].src[46]))
        }
        if (resultat / 2 == Math.max(...parArray) + Math.min(...parArray) || resultat == 0) {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = resultat;
        }
        else {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = 0

        }
        terningSvar[i].style.backgroundColor = "black";
    }
}

function like3(radNummer, kolonneNummer) {
    var resultat = 0;
    var antallGronne = 0;
    for (let i = 0; i < terningSvar.length; i++) {
        if (terningSvar[i].style.backgroundColor == "green") {
            resultat += Number(terningSvar[i].src[46]);
            antallGronne++;
        }
        if (antallGronne == 3 && resultat / 3 == Number(terningSvar[i].src[46]) || resultat == 0) {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = resultat;
        }
        else {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = 0

        }
        terningSvar[i].style.backgroundColor = "black";
    }
}

function like4(radNummer, kolonneNummer) {
    var resultat = 0;
    for (let i = 0; i < terningSvar.length; i++) {
        if (terningSvar[i].style.backgroundColor == "green") {
            resultat += Number(terningSvar[i].src[46]);
        }
        if (resultat / 4 == Number(terningSvar[i].src[46]) || resultat == 0) {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = resultat;
        }
        else {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = 0

        }
        terningSvar[i].style.backgroundColor = "black";
    }
}


//lager en array og passer på at den inneholder 1, 2, 3, 4 og 5, det som trengs i liten straight
function litenStraight(radNummer, kolonneNummer) {
    var resultat = 0;
    var sjekkArray = [];
    for (let i = 0; i < terningSvar.length; i++) {
        if (terningSvar[i].style.backgroundColor == "green") {
            resultat += Number(terningSvar[i].src[46]);
            sjekkArray.unshift(Number(terningSvar[i].src[46]))
        }

        if (resultat == 15 && sjekkArray.includes(1 && 2 && 3 && 4 && 5) || resultat == 0) {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = resultat;
        }

        else {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = 0

        }
        terningSvar[i].style.backgroundColor = "black";
    }
}
//samme som i liten straight bare med 2, 3, 4, 5 og 6
function storStraight(radNummer, kolonneNummer) {
    var resultat = 0;
    var sjekkArray = [];
    for (let i = 0; i < terningSvar.length; i++) {
        if (terningSvar[i].style.backgroundColor == "green") {
            resultat += Number(terningSvar[i].src[46]);
            sjekkArray.unshift(Number(terningSvar[i].src[46]))
        }
        if (resultat == 20 && sjekkArray.includes(2 && 3 && 4 && 5 && 6) || resultat == 0) {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = resultat;
        }
        else {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = 0

        }
        terningSvar[i].style.backgroundColor = "black";
    }
}

function hus(radNummer, kolonneNummer) {
    var resultat = 0;
    var sjekkArray = [];
    for (let i = 0; i < terningSvar.length; i++) {
        if (terningSvar[i].style.backgroundColor == "green") {
            resultat += Number(terningSvar[i].src[46]);
            sjekkArray.unshift(Number(terningSvar[i].src[46]))

        }
    }
    //david kom på en måte å sjekke at svaret ble riktig. Det største tallet i huset gange med 1,5 og plusse på det minste blir resultat / 2
    sjekkArray.sort()
    seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = 0;
    if (sjekkArray[2] == sjekkArray[3]) {
        if (resultat / 2 == sjekkArray[2] * 1.5 + sjekkArray[1]) {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = resultat;
        }
    }

    else if (sjekkArray[2] == sjekkArray[1]) {
        if (resultat / 2 == sjekkArray[2] * 1.5 + sjekkArray[3]) {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = resultat;
        }
    }
    else {
        seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = 0

    }
    for (let i = 0; i < terningSvar.length; i++) {
        terningSvar[i].style.backgroundColor = "black";
    }
}

function sjanse(radNummer, kolonneNummer) {
    var resultat = 0;
    for (let i = 0; i < terningSvar.length; i++) {
        if (terningSvar[i].style.backgroundColor == "green") {
            resultat += Number(terningSvar[i].src[46]);
        }
        seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = resultat;
        terningSvar[i].style.backgroundColor = "black";
    }
}

//her vil sluttresultatet alltid bli 50, med mindre det ikker er yatzy
function yatzy(radNummer, kolonneNummer) {
    var resultat = 0;
    var antallGronne = 0;
    for (let i = 0; i < terningSvar.length; i++) {
        if (terningSvar[i].style.backgroundColor == "green") {
            resultat += Number(terningSvar[i].src[46]);
            antallGronne++;
        }
        if (resultat == terningSvar[1].src[46] * 5 && antallGronne == 5) {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = 50;
        }
        else {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = 0

        }
        terningSvar[i].style.backgroundColor = "black";
    }
}

//regner ut totalsummen, tar verdiene fra alle radene over opp til den første summen
function totalSum(radNummer, kolonneNummer) {
    var summen = 0;
    for (let i = 6; i <= 17; i++) {
        summen += Number(seksjonArray[i][kolonneNummer - 1].innerHTML);
    }
    seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = summen;
}
