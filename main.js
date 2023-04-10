// Realice un programa que dada la vida de un personaje, indique una acción: ∙ 
// . Si la vida es menor a 50, que cure nuestro personaje con una poción grande de vida y nos muestre la vida actual después de haberlo curado.
// ∙ Si la vida es menor a 75, que cure nuestro personaje con una poción chica de vida y nos muestre la vida actual después de haberlo curado.
// ∙ Si la vida es mayor o igual a 75 que no cure a nuestro personaje y nos informe de ello.
// ∙ la poción de vida chica cura 25 y la grande 50.

let vida = parseInt(prompt("Ingrese el porcentaje de vida de su personaje"));
let posGrande = 50
let posChica = 25
if (vida <= 50) {
    nuevaVida = vida + posGrande
    document.write("Se curo su personaje con la posión grande. La vida actual es " + nuevaVida);
}else if (vida >50 && vida<75){
    nuevaVida = vida + posChica
    document.write("Se curo su personaje con la posión chica. La vida actual es " + nuevaVida);
}else {
    document.write("Su personaje no necesita cura en este momento. La vida actual es " + vida);
}