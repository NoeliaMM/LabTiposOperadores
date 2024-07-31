import "./style.css";

document.addEventListener("DOMContentLoaded", function(){
    calculoImportePorAmigo();
})

function calculoImportePorAmigo() {
    const ticket = 120; 
    const bebida = 18; 
    const numAmigos = 6; 
    const comida = ticket - bebida; 
    const totalPorAmigo = comida / numAmigos;

    console.log("Cada uno tenemos que pagar "+ totalPorAmigo + "€.");
}



