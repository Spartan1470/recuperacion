function calc(){
    var nom1 = document.querySelector("#nom1").value;
    var sb1 = parseInt(document.querySelector("#sb1").value);
    var d1 = parseInt(document.querySelector("#d1").value);
    var b1 = parseInt(document.querySelector("#b1").value);
    var t1 = (sb1-d1+b1)
    var nom2 = document.querySelector("#nom2").value;
    var sb2 = parseInt(document.querySelector("#sb2").value);
    var d2 = parseInt(document.querySelector("#d2").value);
    var b2 = parseInt(document.querySelector("#b2").value);
    var t2 = (sb2-d2+b2)
    var resultado = nom1 + " total ganado: " + t1 +" pesos";
    if (t1<t2) {
        resultado = nom2 + " total ganado: " + t2+ " pesos";
    }
    if (t1==t2) {
        resultado = nom1 +" y "+ nom2 +" "+"ganaron:"+ t1 + "pesos" ;
    }
    document.querySelector("#resultados").innerHTML = resultado ;
}