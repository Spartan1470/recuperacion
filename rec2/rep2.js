function calc(){
    var bus1 = document.querySelector("#bus1").value;
    var pesos = document.querySelector("#pesos").value
    var np1 = parseInt(document.querySelector("#np1").value);
    var resultado = bus1 + " dinero recolectado: " + (np1 * pesos) +" pesos";
    var bus2 = document.querySelector("#bus2").value;
    var np2= parseInt(document.querySelector("#np2").value);
    if (np1< np2) {
        console.log("b > a");
        resultado = bus2 + " dinero recolectado: " + (np2 * pesos) +" pesos";
    }
    if (np1==np2) {
        resultado = bus1 +" y "+ bus2 +" dinero recolectado:"+ (np1 * pesos) + " pesos" ;
    }
    document.querySelector("#resultados").innerHTML = resultado ;
}