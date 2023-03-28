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


mal2.hidden = true

function velgFil(){
    var aktueltFilNavn = URL.createObjectURL(inpFilBilde.files[0]);
    bilde.src=aktueltFilNavn;
    bildeB.src=aktueltFilNavn;
}
inpFilBilde.addEventListener("mouseout",velgFil)

function blaa(){
    tittel.src = "blaaruss.tittel.png"
    mal2.hidden = false
    mal1.hidden = true
    
}

function rod(){
    tittel.src = "rodruss.tittel.png"
    mal2.hidden = true
    mal1.hidden = false
    
}