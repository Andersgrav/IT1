var spiller = document.getElementById("spiller");
var blokk = document.getElementById("blokk");

//Lager en funksjon slik at man kan trykke på space for å hoppe
function knappeTrykk(evt){
    var tallKode = evt.keyCode;
    if(tallKode == 32){
        jump()
    }
}
document.addEventListener("keydown", knappeTrykk);

//Lager en animasjon som kjører animasjonen for å hoppe
function jump() {
    if (spiller.classList != "animate") { //sjekker om spilleren ikke allerede hopper
        spiller.classList.add("animate");
    }

    //fjerner animasjonen slik at man kan hoppe igjen
    setTimeout(function () {
        spiller.classList.remove("animate");
    }, 500)
}

//Sjekker om spilleren sin top koordinat(px) er slik at den treffer blokken, dette skjer hvert 10 ms
var sjekk = setInterval(function(){
    var spillerTopp = parseInt(window.getComputedStyle(spiller).getPropertyValue("top"));
    var blokkLeft = parseInt(window.getComputedStyle(blokk).getPropertyValue("left"));
    if(blokkLeft < 20 && blokkLeft > 0 && spillerTopp >= 130){
        blokk.style.animation = "none";
        blokk.style.display = "none";
        alert("Du tapte")
    }
},10);
