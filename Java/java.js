let tall1 = Number(prompt("Oppgi et tall"))
let tall2 = Number(prompt("Oppgi et tall"))
var operator = prompt("Opperasjon (+ - * eller /")
let resultat;

if (operator == "+") {
    resultat = tall1 + tall2;
}
else if (operator == "-") {
    resultat = tall1 - tall2;
}
else if (operator == "*") {
    resultat = tall1 * tall2
}
else if (operator == "/") {
    resultat = tall1 / tall2
}
else{
    alert("Skriv inn en operator")
}

document.write(("Svaret blir ") + resultat )