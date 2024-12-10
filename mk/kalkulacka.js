// Příklad skriptu v programovacím jazyce Javascript
var vysledek;
var tlPlus;
var tlMinus;
var tlKrat;
var tlDeleno;

function obsluha(event) {
    var a = 0; 
    var b = 0; 
    vysledek = document.querySelector("#vysledek");
    vysledek.textContent = "0";
    tlPlus = document.querySelector("#tlPlus");
    tlMinus = document.querySelector("#tlMinus");
    tlKrat = document.querySelector("#tlKrat");
    tlDeleno = document.querySelector("#tlDeleno");
    var vstup1 = document.querySelector("#vstup1");
    var vstup2 = document.querySelector("#vstup2");
    var znacka = document.querySelector("#znacka");
    vstup1.addEventListener("change", function(event){
        a = parseInt(event.target.value, 10);
        if (isNaN(a)) {
            a = 0;
        }
        event.target.value = a;
    });
    vstup2.addEventListener("change", function(event){
        b = parseInt(event.target.value, 10);
        if (isNaN(b)) {
            b = 0;
        }
        event.target.value = b;
    });

    tlPlus.addEventListener("click", function(event){
        vysledek.textContent = a + b;
        znacka.textContent = "+"
    });
    tlMinus.addEventListener("click", function(event){
        vysledek.textContent = a - b;
        znacka.textContent = "-"
    });
    tlKrat.addEventListener("click", function(event){
        vysledek.textContent = a * b;
        znacka.textContent = "×"
    });
    tlDeleno.addEventListener("click", function(event){
        if (b != 0) {
            vysledek.textContent = ("" + a/b).substring(0, 8);
        } else {
            vysledek.textContent = "ERROR"
        }
        znacka.textContent = "/"
    });
}
document.addEventListener("DOMContentLoaded", obsluha);
