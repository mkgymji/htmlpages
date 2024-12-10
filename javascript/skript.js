// Příklad skriptu v programovacím jazyce Javascript
var jmeno;
jmeno =  "Jiří";
var cislo =   3;
var pi =  3.14;

var dvepi =  2 * pi;

console.log(jmeno)
console.log(cislo)
console.log(dvepi)

//  alert("Ahoj")

function greeting(name) {
    console.log("Ahoj " + name );
}
greeting(jmeno);

// -----------------------------------------
function hlavni(event) {
    var pocitadlo = 0;
    console.log("Hlavni funkce ")
    console.log(event);
    // SELECTORY
    var nadpis = document.querySelector("h1");
    var vstup = document.querySelector("#vstup");
    var odstavec = document.querySelector("#prazdny")
    var tlCount= document.querySelector("#tl1")
    var tlReset = document.querySelector("#tl2")
    // EVENT LISTENERS
    vstup.addEventListener("change", function(event){
        pocitadlo = parseInt(event.target.value);
        if (isNaN(pocitadlo)) {
            pocitadlo = 0;
        }
        odstavec.textContent= "Pocitadlo: " + pocitadlo;
    });
    tlCount.addEventListener("click", function(event){
        pocitadlo = pocitadlo + 1;
        odstavec.textContent= "Pocitadlo: " + pocitadlo;
    });
    tlReset.addEventListener("click", function(event){
        pocitadlo = 0;
        odstavec.textContent= "Pocitadlo: " + pocitadlo;
    });
    // Změna objektu
    nadpis.style.color = "red"
    nadpis.textContent = "Učíme se Javascript"
    odstavec.innerHTML = "<ul><li>prvni<li>druhy</ul"

}
// -----------------------------------------

document.addEventListener("DOMContentLoaded", hlavni);  