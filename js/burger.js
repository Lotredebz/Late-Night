const btn = document.querySelector(".burger")
const affichage = document.querySelector("header")

btn.addEventListener("click", function(){
    affichage.classList.toggle("burgeranim");
    document.body.classList.toggle("no-scroll"); // Ajoute ou retire la classe
    console.log(affichage.classList);
});