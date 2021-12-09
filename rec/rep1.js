function calc(){
    var nom1 = document.querySelector("#nom1").value;
    
    var ed1 = parseInt(document.querySelector("#ed1").value);
    var resultado = nom1 + " edad: " + ed1 + " años";
    var nom2 = document.querySelector("#nom2").value;
    var ed2 = parseInt(document.querySelector("#ed2").value);
    if (ed1<ed2) {
        resultado = nom2 + " edad: " + ed2 + " años";
    }
    if (ed1==ed2) {
        resultado = nom1 +" y "+ nom2 +" "+"son gemelos:"+ ed1 + "años" ;
    }
        resultado
    document.querySelector("#resultados").innerHTML = resultado ;
}