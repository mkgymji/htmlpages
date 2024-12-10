// Příklad skriptu v programovacím jazyce Javascript
var jmeno;
jmeno = "Jiří";
var cislo =   3;
var pi =  3.14;

var dvepi =  2 * pi;

console.log(jmeno)
console.log(cislo)
console.log(dvepi)

var nadpis;

function obsluha(event) {
 
    nadpis = document.querySelector("h1");
    nadpis.textContent = "Toto je nadpis";
    nadpis.style.color = "red";
    var vstup = document.querySelector("#vstup");
    vstup.addEventListener("change", function(event){
        cislo = parseInt(event.target.value, 10);
        if (isNaN(cislo)) {
            cislo = 0;
        }
        nadpis.textContent = "číslo je: " + cislo;
        vstup.value = "";
    });

    var casovac = setInterval(obsluhaCasovace, 1000);

    function obsluhaCasovace() {
        cislo = cislo + 1;
        nadpis.textContent = "číslo je: " + cislo;
    }


    var zasobnik;
    nadpis.addEventListener("mouseover", function(event) {
           nadpis.style.color = "black";
           zasobnik = nadpis.textContent;
           nadpis.textContent = "KOOOOK!";
    });
    nadpis.addEventListener("mouseout", function(event) {
        nadpis.style.color = "red";
        nadpis.textContent = zasobnik;
    
    var odstavec = document.querySelector("#prazdny");
    odstavec.innerHTML = "<h2>"+cislo+"</h2>";    
    var tlCount = document.querySelector("#tl1");
    var tlReset = document.querySelector("#tl2");
    tlCount.addEventListener("click", function(event){
        cislo = cislo + 1;
        odstavec.innerHTML = "<h2>"+cislo+"</h2>";    
        odstavec.style.color = "black";
    });
    tlReset.addEventListener("click", function(event){
        cislo = 0;
        odstavec.innerHTML = "<h2>"+cislo+"</h2>";    
        odstavec.style.color = "red";
    });    
 });
}
document.addEventListener("DOMContentLoaded", obsluha);
