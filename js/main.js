function validate() {
    var numero = parseFloat(document.getElementById("numero").value);
    var nombre = document.getElementById(nombre);


    if (isNaN(numero) || numero == 0) {
        alert("Por favor ingrese numero para que nos contactemos ");
    }
    if (nombre==null || nombre==""){  
        alert("Escriba nombre por favor");  
    }
    if (document.getElementById("mensaje").value == ""){
        alert("Escriba el motivo de su mensaje");
    }
    else {
        alert("Enviado con exito");
        document.getElementById("form1").submit();
    }
}