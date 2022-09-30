

function myFunction(){
    let cantidad=parseFloat(document.getElementById("cnt").value);
    let showCantidad=document.getElementById("rC");

let personas=parseInt(document.getElementById("prs").value)


let propina = document.getElementById("prc").value
let propinaOperation = (cantidad*propina)/cantidad
let mostrar=document.getElementById("cC")

cantidad+= propinaOperation

let opertation=cantidad/personas;
mostrar.innerHTML="La cantidad a pagar es"
showCantidad.innerHTML="$" + opertation;

}